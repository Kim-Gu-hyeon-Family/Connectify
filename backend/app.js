const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use('/user', authRoutes);
app.use('/posts', postRoutes);  

// WebSocket 이벤트 처리
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // 클라이언트가 방에 입장할 때
    socket.on('joinRoom', (roomId) => {
        console.log(`User joined room: ${roomId}`);
        socket.join(roomId);
    });

    // 메시지 보내기
    socket.on('sendMessage', (data) => {
        const { roomId, username, message } = data;
        // 해당 방에 메시지를 전송
        io.to(roomId).emit('receiveMessage', { username, message });
    });

    // 연결 종료
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// 게시글 API (게시글 생성, 조회)
app.post('/posts', async (req, res) => {
    const { title, content, userId } = req.body;
    try {
        const post = await prisma.post.create({
            data: {
                title,
                content,
                userId
            }
        });

        // 방 ID를 게시글 ID로 설정 (채팅방 생성)
        const roomId = post.id;

        res.status(201).json({
            post,
            message: "채팅방이 생성되었습니다.",
            roomId: roomId
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '게시글 생성 중 오류가 발생했습니다.' });
    }
});

// 서버 시작
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
