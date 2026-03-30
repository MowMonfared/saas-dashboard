import './HomePage.css';
//import { rowsData } from '../data/rows.js';
//import { PageContent } from '../components/PageContent.js';

export function HomePage() {
  return (
    <div className="homepage">
      {/* <Sidebar />
      <PageContent />
      */}
      <div className="header">Header</div>
      <div className="content">
        <div className="sidebar">Sidebar</div>
        <div className="maincontent">Main content</div>
      </div>
    </div>
  );
}
