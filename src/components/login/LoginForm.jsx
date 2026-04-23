import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/useAuth";
import { useToast } from "@/context/ToastContext";
import { useState } from "react";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showToast } = useToast();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      await login(form.email, form.password);

      showToast("Welcome to Product List", "success");

      navigate("/product-list", { replace: true });
    } catch (error) {
      const message =
        error?.response?.data?.message || "Invalid email or password";

      showToast(message, "error");
      console.error(error);
    } finally {
      setLoading(false);
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
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="login-input"
                value={form.email}
                disabled={loading}
                onChange={(e) =>
                  setForm((pr) => ({ ...pr, email: e.target.value }))
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Enter your password</label>
              <div className="password-wrap">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="login-input"
                  value={form.password}
                  disabled={loading}
                  onChange={(e) =>
                    setForm((pr) => ({ ...pr, password: e.target.value }))
                  }
                />
                <button
                  type="button"
                  className="password-toggle"
                  disabled={loading}
                >
                  <FaEye />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`login-submit ${loading ? "is-loading" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <span className="login-submit-inner">
                  <span className="login-spinner" />
                  Logging in...
                </span>
              ) : (
                "Log in"
              )}
            </button>

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