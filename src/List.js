import React from 'react';
import './List.css';
import Card from './Card';

function List(props) {
    const cardList = props.cards.map(card =>
        <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            onDeleteCard={props.onDeleteCard}
        />
    );
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {cardList}
                <button 
                    type='button'
                    className='List-add-button'
                    onClick={() => props.onAddCard(props.listId)}
                >
                    + Add Random Card
                </button>
            </div>
        </section>
    );
}


export default List;