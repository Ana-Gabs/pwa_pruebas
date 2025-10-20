import React from 'react';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import Home from './views/Home';

function App() {
  return (
    <div className="app-shell" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <NavMenu />
        <main style={{ flex: 1, padding: '1rem' }}>
          <Home />
        </main>
      </div>
      <Footer />
    </div>
  );
}


export default App;