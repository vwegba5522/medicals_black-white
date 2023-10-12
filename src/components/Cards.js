import React from "react";
import CardItem from "./CardItem";
import './Cards.css'


function Cards() {
    return (
        <div className="cards">
            <h1>Check Out these Hospitals</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        <CardItem
                            src='img/blog_1.jpg'
                            text='List of Countries without Coronavirus case '
                            label='Hospitals'
                            path='/About'
                        />
                        <CardItem
                            src='img/blog_1.jpg'
                            text='List of Countries without Coronavirus case'
                            label='Hospitals'
                            path='/About' />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='img/blog_2.jpg'
                            text='What is the impact of eating too much sugar?'
                            label='Hospitals'
                            path='/About'
                        />
                        <CardItem
                            src='img/blog_3.jpg'
                            text='What is the impact of eating too much sugar?'
                            label='Hospitals'
                            path='/About'
                        />
                        <CardItem
                            src='img/blog_4.jpg'
                            text='What is the impact of eating too much sugar?'
                            label='Hospitals'
                            path='/About'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;