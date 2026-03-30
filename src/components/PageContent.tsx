import './HomePage.css';
import { rowsData } from '../data/rows.js';
import { Table } from './Table.js';

export function PageContent() {
  return (
    <div classNameName="layout">
      <h1>IT Dashboard</h1>
      <p classNameName="read-the-docs">
        Here are summary of the IT dashboard, including system status,
        performance metrics, and recent alerts. You can also navigate to
        different sections to view detailed information and manage your IT
        infrastructure.
      </p>
      <Table />
    </div>
  );
}
