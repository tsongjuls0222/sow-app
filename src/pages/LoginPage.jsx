import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "@/assets/bg.jpg";
function LoginPage() {
    return (
        <div class="page" style={{ backgroundImage: `url(${bgImage})`}}>
    <header class="header">
  <div class="header-inner">
    <div class="mobile-left">
      <button class="menu-toggle" id="menuToggle" aria-label="Open menu">
        ☰
      </button>
    </div>

    <div class="desktop-nav">
      <a href="#">Home</a>
      <a href="#">Order</a>
      <a href="#">Our Customers</a>
      <a href="#">About us</a>
      <a href="#">Contact Us</a>

      <div class="lang-wrapper">
        <button class="lang-toggle" id="desktopLangToggle">
          English <span>🇬🇧</span>
        </button>
      </div>
    </div>

    <div class="mobile-right">
      <div class="lang-wrapper">
        <button class="lang-toggle" id="mobileLangToggle">
          English <span>🇬🇧</span>
        </button>

        <div class="lang-dropdown" id="mobileLangDropdown">
          <a href="#">Svenska <span>🇸🇪</span></a>
          <a href="#">English <span>🇬🇧</span></a>
        </div>
      </div>
    </div>
  </div>

  <div class="mobile-menu" id="mobileMenu">
    <a href="#">Home</a>
    <a href="#">Order</a>
    <a href="#">Our Customers</a>
    <a href="#">About us</a>
    <a href="#">Contact Us</a>
  </div>
</header>

    <main class="main">
      <div class="login-card">
        <h1 class="login-title">Log in</h1>

        <form>
          <div class="form-group">
            <label for="email">Enter your email address</label>
            <div class="input-wrap">
              <input
                id="email"
                class="form-input"
                type="email"
                placeholder="Email address"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="password">Enter your password</label>
            <div class="input-wrap">
              <input
                id="password"
                class="form-input"
                type="password"
                placeholder="Password"
              />
              <button type="button" class="eye-btn">◉</button>
            </div>
          </div>

          <button class="login-btn" type="submit">Log in</button>

          <div class="bottom-links">
            <a href="#">Register</a>
            <a href="#">Forgotten password?</a>
          </div>
        </form>
      </div>
    </main>

    <footer class="footer">
      <div class="footer-top">
        <div class="footer-brand">123 Fakturera</div>

        <div class="footer-links">
          <a href="#">Home</a>
          <a href="#">Order</a>
          <a href="#">Contact us</a>
        </div>
      </div>

      <div class="footer-line"></div>

      <div class="footer-bottom">
        © Lättfaktura, CRO no. 638537, 2025. All rights reserved.
      </div>
    </footer>
  </div>
    );
}

export default LoginPage;