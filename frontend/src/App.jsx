import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import Signup from "./pages/Auth/Signup/Signup";
import Signin from "./pages/Auth/Signin/Signin";
import Main from "./pages/Auth/main/Main"; // 경로 확인
import Notfounds from "./pages/Auth/Notfounds/Notfounds";
import CreatePost from "./pages/Auth/create-post/create-post";

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
