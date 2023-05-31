import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/main";
import Signup from "./components/signup"
import Login from "./components/login";
import EmailVerify from "./components/email_verify";
import ForgotPassword from "./components/forgot_password";
import PasswordReset from "./components/password_reset";

function App() {
	const user = localStorage.getItem("token");

	return (
    <BrowserRouter>
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/password-reset/:id/:token" element={<PasswordReset />} />
		</Routes>
    </BrowserRouter>
	);
}

export default App;