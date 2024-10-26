import React, { useState } from "react";

const menuItems = [
  { name: "Principal", href: "/" },
  { name: "Inventario", href: "/inventorio" },
  { name: "Blog", href: "/blog" },
  { name: "Compra", href: "/compra" },
  { name: "Paginas", href: "/paginas" },
  { name: "Contactanos", href: "/contactanos" },
];

export default function MainMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="main-menu">
      <div className="container">
        <div className="menu-wrapper">
          <div className="logo">
            <a href="/">EL AUTOLOTE</a>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="menu-item">
                {item.name}
              </a>
            ))}
            <button className="sign-in-button">Sign In</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="menu-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="mobile-menu-item">
                {item.name}
              </a>
            ))}
            <button className="mobile-sign-in-button">Sign In</button>
          </div>
        )}
      </div>

      <style jsx>{`
        .main-menu {
          background-color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .menu-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
        }
        .logo a {
          font-size: 1.25rem;
          font-weight: bold;
          color: #333;
          text-decoration: none;
        }
        .desktop-menu {
          display: none;
        }
        .menu-item {
          color: #666;
          text-decoration: none;
          padding: 8px 12px;
          margin: 0 4px;
          font-size: 0.875rem;
        }
        .menu-item:hover {
          color: #333;
        }
        .sign-in-button,
        .mobile-sign-in-button {
          background-color: transparent;
          border: 1px solid #666;
          color: #666;
          padding: 8px 16px;
          font-size: 0.875rem;
          cursor: pointer;
          margin-left: 16px;
        }
        .sign-in-button:hover,
        .mobile-sign-in-button:hover {
          background-color: #f0f0f0;
        }
        .mobile-menu-button {
          background: none;
          border: none;
          cursor: pointer;
        }
        .menu-icon {
          width: 24px;
          height: 24px;
        }
        .mobile-menu {
          display: flex;
          flex-direction: column;
          padding: 16px 0;
        }
        .mobile-menu-item {
          color: #666;
          text-decoration: none;
          padding: 12px 0;
          font-size: 1rem;
          border-bottom: 1px solid #eee;
        }
        .mobile-sign-in-button {
          margin: 16px 0 0 0;
        }

        @media (min-width: 768px) {
          .desktop-menu {
            display: flex;
            align-items: center;
          }
          .mobile-menu-button {
            display: none;
          }
          .mobile-menu {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
