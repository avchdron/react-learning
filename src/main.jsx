import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from './mock.js'

const rootElm = document.getElementById('root');
const rootReact = ReactDOM.createRoot(rootElm);
rootReact.render(
  restaurants.map((Item) => (
    <div>
      <h2>{Item.name}</h2>
      <h3>Меню</h3>
      <ul>
        {Item.menu.map((Elm) => (
          <li>{Elm.name} : ${Elm.price}</li>
        ))}
      </ul>
      <h3>Отзывы</h3>
      <ul>
        {Item.reviews.map((review) => (
            <li> {review.user} ({review.rating}): {review.text} </li>
        ))}
      </ul>
      <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '1px',
        }}
      />
    </div>
))

);

