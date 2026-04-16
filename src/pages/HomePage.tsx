import './HomePage.css';
import { Table } from '../components/Table';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { Stats } from '../components/Stats';
import { useState } from 'react';

export function HomePage() {
  const [selectedDep, setSelectedDep] = useState('All Departments');

  return (
    <div className="homepage">
      <Header />
      <div className="content">
        <Sidebar selectedDep={selectedDep} setSelectedDep={setSelectedDep} />
        <div className="maincontent">
          <Stats />
          <Table selectedDep={selectedDep} setSelectedDep={setSelectedDep} />
        </div>
      </div>
    </div>
  );
}
