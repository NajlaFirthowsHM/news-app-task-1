import React from 'react';

export default function NewsDetails({ article, onClose }) { 
    
    return (
        <div style={{position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'white',
            zIndex: '1000',
            padding: '20px',}}>
            <button onClick={onClose}>Close</button>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.content}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a>
        </div>
    );
}
