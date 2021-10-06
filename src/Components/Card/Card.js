import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({data}) => {
  
  return (
    <Link className={styles.cardDoc} to={`/document/${data.id}`} key={data.id}>
        <div className={styles.cardImage}>    
            <img src={data.image ? data.image : `${process.env.PUBLIC_URL}img/thumbnail.jpg`} alt={data.title} loading="lazy" />    
        </div>
        <div className={styles.cardBody}>
            <h3>{data.title}</h3>
            <div className="badge">{data.type}</div>
        </div>
    </Link>
  );
}

export default Card;

    