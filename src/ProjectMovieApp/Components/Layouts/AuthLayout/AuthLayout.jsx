import "./AuthLayout.scss";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-wrapper">
      <div className="auth-overlay"></div>

      {/* Floating movie elements (decorative) */}
      <div className="floating-movies">
        <span>🎬</span>
        <span>🍿</span>
        <span>🎥</span>
        <span>⭐</span>
        <span>🎬</span>
        <span>🍿</span>
      </div>

      <div className="auth-box">
        <div className="auth-brand">
          <h1>MovieVerse</h1>
          <p>Watch. Discover. Enjoy.</p>
        </div>

        <div className="auth-content">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;