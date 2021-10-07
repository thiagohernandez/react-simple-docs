import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import thumbnail from '../../images/thumbnail.jpg';

const Card = ({data}) => {
    let cardImage = data.image;
    if (!cardImage) {
        cardImage = thumbnail;
    }
  return (
    <Link className={styles.cardDoc} to={`/document/${data.id}`} key={data.id}>
        <div className={styles.cardImage}>    
            <img src={cardImage} alt={data.title} loading="lazy" />    
        </div>
        <div className={styles.cardBody}>
            <h3>{data.title}</h3>
            <div className="badge">{data.type}</div>
        </div>
    </Link>
  );
}

export default Card;

    