import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Container from './components/Container';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [filtro, setFiltro] = useState('');
  const [busca, setBusca] = useState('');

  const handleSearch = (query) => {
    setBusca(query.toLowerCase());
  };

  const handleFilter = (categoria) => {
    setFiltro(categoria === 'limpar' ? '' : categoria);
  };

  return (
    <div>
      <Header />
      <Banner onSearch={handleSearch} onFilter={handleFilter} />
      <Container filtro={filtro} busca={busca} />
      <Footer />
    </div>
  );
}

export default App;
