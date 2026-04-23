export function getAccessToken() {
  return localStorage.getItem("accessToken") || "";
}

export function setAccessToken(token) {
  localStorage.setItem("accessToken", token);
}

export function clearAuth() {
  localStorage.removeItem("accessToken");
}

export function redirectToLogin() {
  if (window.location.pathname !== "/login") {
    window.location.replace("/login");
  }
}