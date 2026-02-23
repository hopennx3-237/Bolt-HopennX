import { useState } from 'react';
import { AppLayout } from './layouts/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { CityManagement } from './pages/CityManagement';

function App() {
  const [currentPage, setCurrentPage] = useState('/dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case '/data/cities':
        return <CityManagement />;
      case '/dashboard':
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppLayout page={currentPage}>
      {renderPage()}
    </AppLayout>
  );
}

export default App;