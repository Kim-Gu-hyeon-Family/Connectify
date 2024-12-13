const express = require('express');
const { createRoom, sendMessage, getMessages } = require('../controllers/chatController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * /api/chat/rooms:
 *   post:
 *     summary: 새로운 채팅방 생성
 *     description: 인증된 사용자가 새로운 채팅방을 생성합니다.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomName:
 *                 type: string
 *               participants:
 *                 type: array
 *                 items:
 *                   type: string
 *               required:
 *                 - roomName
 *     responses:
 *       201:
 *         description: 채팅방 생성 성공
 *       400:
 *         description: 잘못된 요청
 */
router.post('/rooms', authenticateToken, createRoom);

/**
 * @swagger
 * /api/chat/messages:
 *   post:
 *     summary: 메시지 전송
 *     description: 인증된 사용자가 특정 채팅방에 메시지를 보냅니다.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomId:
 *                 type: string
 *               message:
 *                 type: string
 *               required:
 *                 - roomId
 *                 - message
 *     responses:
 *       200:
 *         description: 메시지 전송 성공
 *       400:
 *         description: 잘못된 요청
 */
router.post('/messages', authenticateToken, sendMessage);

/**
 * @swagger
 * /api/chat/rooms/{roomId}/messages:
 *   get:
 *     summary: 특정 채팅방의 메시지 조회
 *     description: 인증된 사용자가 특정 채팅방의 메시지를 조회합니다.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: roomId
 *         in: path
 *         required: true
 *         description: 채팅방 ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 메시지 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   sender:
 *                     type: string
 *                   message:
 *                     type: string
 *                   timestamp:
 *                     type: string
 *       400:
 *         description: 잘못된 요청
 */
router.get('/rooms/:roomId/messages', authenticateToken, getMessages);

module.exports = router;
