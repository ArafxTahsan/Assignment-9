import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

const validatePassword = (password) => {
  if (!/[A-Z]/.test(password)) return "Password must have an uppercase letter.";
  if (!/[a-z]/.test(password)) return "Password must have a lowercase letter.";
  if (password.length < 6) return "Password length must be at least 6 characters.";
  return "";
};

export default function Register() {
  const { registerUser, googleLogin, setToast, firebaseReady } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", photoURL: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const passwordError = validatePassword(form.password);
    if (passwordError) {
      setError(passwordError);
      return;
    }
    try {
      await registerUser(form);
      setToast({ type: "success", message: "Your GreenNest account is ready." });
      navigate("/");
    } catch (err) {
      setError(err.message);
      setToast({ type: "error", message: err.message });
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      setToast({ type: "success", message: "Google signup successful." });
      navigate("/");
    } catch (err) {
      setToast({ type: "error", message: err.message });
    }
  };

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleRegister}>
        <span className="eyebrow">Start growing</span>
        <h1>Signup</h1>
        {!firebaseReady && <p className="setup-warning">Add Firebase keys to `.env` before using authentication.</p>}
        <label>Name</label>
        <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
        <label>Email</label>
        <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
        <label>Photo URL</label>
        <input name="photoURL" type="url" placeholder="https://..." value={form.photoURL} onChange={handleChange} required />
        <label>Password</label>
        <div className="password-field">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Aa1234"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password">
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {error && <p className="form-error">{error}</p>}
        <button className="primary-button full" type="submit">Register</button>
        <button className="google-button" type="button" onClick={handleGoogle}>Continue with Google</button>
        <p className="switch-auth">Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </section>
  );
}
