import { useState, useEffect, useRef } from 'react';
import styles from './Banner.module.css';

function Banner({ onSearch, onFilter }) {
    const [query, setQuery] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(query);
        }
    };

    const handleCategorySelect = (categoria) => {
        if (onFilter) {
            onFilter(categoria);
        }
        setDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section className={styles.banner}>
            <div className={styles.leftControls}>
                <button className={styles.featureButton}>▶ Filmes Premiados</button>
                <button className={styles.featureButton}>▶ Fambruesa de Ouro</button>

                <div className={styles.dropdown} ref={dropdownRef}>
                    <div
                        className={styles.dropdownToggle}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        Filtrar por Categorias <span className={styles.arrow}>▼</span>
                    </div>

                    {dropdownOpen && (
                        <ul className={styles.dropdownMenu}>
                            <li onClick={() => handleCategorySelect('comedia')}>Comédia</li>
                            <li onClick={() => handleCategorySelect('terror')}>Terror</li>
                            <li onClick={() => handleCategorySelect('acao')}>Ação</li>
                            <li onClick={() => handleCategorySelect('limpar')}>Limpar</li>
                        </ul>
                    )}
                </div>
            </div>

            <div className={styles.rightControls}>
                <form onSubmit={handleSearch} className={styles.searchForm}>
                    <input
                        type="text"
                        placeholder="Pesquisar filmes..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className={styles.searchInput}
                    />
                    <button type="submit" className={styles.searchButton}>🔍</button>
                </form>
                <div className={styles.icons}>
                    <button className={styles.icon} title="Mensagens">💬</button>
                    <button className={styles.icon} title="Perfil do usuário">👤</button>
                    <button className={styles.icon} title="Comunidade">👥</button>
                    <button className={styles.icon} title="Configurações">⚙️</button>
                </div>
            </div>
        </section>
    );
}

export default Banner;
