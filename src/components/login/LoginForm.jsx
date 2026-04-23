import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useState, useRef, useEffect } from "react";

function LoginForm({handleLogin}) {
  const navigate        = useNavigate();
  const { login }       = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const log = await login(form.email, form.password);
      // navigate("/product-list", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="login-main">
      <section className="login-section">
        <div className="login-card">
          <h1 className="login-title">Log in</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Enter your email address</label>
              <input id="email" type="email" placeholder="Email address" className="login-input" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Enter your password</label>
              <div className="password-wrap">
                <input id="password" type="password" placeholder="Password" className="login-input" />
                <button type="button" className="password-toggle"><FaEye /></button>
              </div>
            </div>
            <button type="submit" className="login-submit">Log in</button>
            <div className="login-actions">
              <a href="#">Register</a>
              <a href="#">Forgotten password?</a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default LoginForm;