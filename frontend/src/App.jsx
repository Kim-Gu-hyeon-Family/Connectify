import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Main from "./pages/Main"; // 경로 확인
import Notfounds from "./pages/Notfounds";
import CreatePost from "./pages/create-post";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/main" element={<Main />} />
            <Route path="*" element={<Notfounds />} /> {/* path="" 수정 */}
            <Route path="/CreatePost" element={<CreatePost />} />

        </Routes>
    </Router>
);

export default App;
