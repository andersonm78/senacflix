import React from 'react';
import styles from './Cards.module.css';

function Cards({ filme }) {
    return (
        <div className={styles.cardWrapper}>
            <a href={filme.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
                <img src={filme.imagem} alt={filme.nome} />
            </a>
            <p className={styles.titulo}>{filme.nome}</p>
        </div>
    );
}

export default Cards;
