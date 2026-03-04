import './HomePage.css';
import { rowsData } from '../data/rows.js';

export function HomePage() {
  return (
    <div className="header">
      <h1>IT Dashboard</h1>
      <p className="read-the-docs">
        Here are summary of the IT dashboard, including system status,
        performance metrics, and recent alerts. You can also navigate to
        different sections to view detailed information and manage your IT
        infrastructure.
      </p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Devices</th>
          </tr>
        </thead>
        <tbody>
          {rowsData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.role}</td>
              <td>{row.devices}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
