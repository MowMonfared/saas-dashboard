import { logo } from '../assets';
import './Header.css';

export function Header() {
  return (
    <div className="header">
      <a href="" className="logo-link">
        <img src={logo} alt="Company Logo" className="logo" />
      </a>
      <div className="divider" />
      <p className="header-name">All Departments</p>
      <div className="avatar">MM</div>
    </div>
  );
}
