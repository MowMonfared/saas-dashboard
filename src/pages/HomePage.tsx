import './HomePage.css';
import logo from '../assets/logo.png';
import plus from '../assets/plus.svg';
import chevrondown from '../assets/chevron-down.svg';
//import { rowsData } from '../data/rows.js';
//import { PageContent } from '../components/PageContent.js';

export function HomePage() {
  return (
    <div className="homepage">
      {/* <Sidebar />
      <PageContent />
      */}
      <div className="header">
        <a href="" className="logo-link">
          <img src={logo} alt="Company Logo" className="logo" />
        </a>
        <div className="divider" />
        <p className="header-name">All Departments</p>
        <div className="avatar">MM</div>
      </div>
      <div className="content">
        <div className="sidebar">
          <div className="dep">
            <div className="dep-name"> Departments</div>
            <img src={chevrondown} className="dep-icon" />
          </div>
          <div className="dep-selected">
            <div className="dep-name">All Departments</div>
            <div className="dep-number">14</div>
          </div>
          <div className="dep">
            <div className="dep-name">Engineering</div>
            <div className="dep-number">5</div>
          </div>
          <div className="dep">
            <div className="dep-name">Design</div>
            <div className="dep-number">2</div>
          </div>
          <div className="dep">
            <div className="dep-name">Finance</div>
            <div className="dep-number">2</div>
          </div>
          <div className="dep">
            <div className="dep-name">HR</div>
            <div className="dep-number">2</div>
          </div>
          <button className="add-dep">
            <img src={plus} className="dep-icon" />
            Add Department
          </button>
          <div className="dep inventory">
            <div className="dep-name">Inventory</div>
            <div className="dep-number">5</div>
          </div>
        </div>
        <div className="maincontent">Main content</div>
      </div>
    </div>
  );
}
