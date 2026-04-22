import { useState } from "react";
import diamond_logo from "@/assets/diamond.png";
import { navItems } from "@/data/globaldata";
import LanguageDropdown from "./LanguageDropdown";

function LoginForm({handleLogin}) {
    return (
        <main className="my-login-hero">
            <section className="my-login-shell">
                <div className="my-premium-card">
                    <div className="my-premium-card-glow my-premium-card-glow-1" />
                    <div className="my-premium-card-glow my-premium-card-glow-2" />
                    <div className="my-premium-card-inner">
                        <h1>Log in</h1>
                        <p className="my-login-subtext">
                            Enter your credentials to continue to your account dashboard.
                        </p>
                        <form className="my-login-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleLogin();
                            }}
                        >
                            <div className="my-field-group">
                                <label>Enter your email address</label>
                                <input type="email" defaultValue="test01@gmail.com" />
                            </div>
                            <div className="my-field-group">
                            <label>Enter your password</label>
                            <div className="my-password-wrap">
                                <input type="password" defaultValue="password" />
                            </div>
                            </div>
                            <button type="submit" className="my-login-btn">Log in</button>
                            <div className="my-login-actions">
                                <a href="#">Register</a>
                                <a href="#">Forgotten password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LoginForm;