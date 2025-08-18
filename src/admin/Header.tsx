import React from "react";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className="ap-header">
      <h1>{title}</h1>
      <div className="ap-header-actions">
        <button className="ap-btn ap-btn-ghost">Preview Site</button>
        <button className="ap-btn ap-btn-primary">Logout</button>
      </div>
    </header>
  );
};

export default Header;
