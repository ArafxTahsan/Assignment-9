import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Login() {
  const { loginUser, googleLogin, resetPassword, setToast, firebaseReady } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await loginUser(form.email, form.password);
      setToast({ type: "success", message: "Welcome back to GreenNest." });
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
      setToast({ type: "error", message: err.message });
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      setToast({ type: "success", message: "Google login successful." });
      navigate(from, { replace: true });
    } catch (err) {
      setToast({ type: "error", message: err.message });
    }
  };

  const handleReset = async () => {
    if (!form.email) {
      setError("Please enter your email first.");
      return;
    }
    try {
      await resetPassword(form.email);
      setToast({ type: "success", message: "Password reset email sent. Check Gmail." });
      window.open("https://mail.google.com", "_blank", "noopener,noreferrer");
    } catch (err) {
      setError(err.message);
      setToast({ type: "error", message: err.message });
    }
  };

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>
        <span className="eyebrow">Welcome back</span>
        <h1>Login</h1>
        {!firebaseReady && <p className="setup-warning">Add Firebase keys to `.env` before using authentication.</p>}
        <label>Email</label>
        <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
        <label>Password</label>
        <div className="password-field">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Your password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password">
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <button className="text-button" type="button" onClick={handleReset}>Forget Password?</button>
        {error && <p className="form-error">{error}</p>}
        <button className="primary-button full" type="submit">Login</button>
        <button className="google-button" type="button" onClick={handleGoogle}>Continue with Google</button>
        <p className="switch-auth">New to GreenNest? <Link to="/register">Signup</Link></p>
      </form>
    </section>
  );
}
