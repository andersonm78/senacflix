import React, { useRef } from 'react';
import styles from './Category.module.css';
import Cards from '../Cards';
import Titulo from './Titulo';

function Category({ titulo, filmes, busca }) {
    const ref = useRef(null);

    const scrollLeft = () => {
        if (ref.current) ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        if (ref.current) ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const filmesFiltrados = filmes.filter((filme) =>
        busca ? filme.nome.toLowerCase().includes(busca) : true
    );

    if (filmesFiltrados.length === 0) return null;

    return (
        <div className={styles.categoria}>
            <Titulo texto={titulo} />

            <div className={styles.carrosselWrapper}>
                <button className={`${styles.navButton} ${styles.left}`} onClick={scrollLeft}>⭠</button>

                <div className={styles.listaFilmes} ref={ref}>
                    {filmesFiltrados.map((filme) => (
                        <Cards key={filme.id} filme={filme} />
                    ))}
                </div>

                <button className={`${styles.navButton} ${styles.right}`} onClick={scrollRight}>⭢</button>
            </div>
        </div>
    );
}

export default Category;