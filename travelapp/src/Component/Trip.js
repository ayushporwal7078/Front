import React from 'react'
import TripData from './TripData'



export default function Trip() {
  return (
    <div className='trip'>
      <h1>Recent Trip</h1>
      <p>YOu can discover unique destination using google map</p>
      <div className='tripcard'>
        <TripData image="https://images.unsplash.com/photo-1545424436-1be2b5c0d0fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFsYXlzaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" heading = "Trip In Indonesia" text="Indonesia is centrally-located along ancient trading routes between the Far East, South Asia and the Middle East, resulting in many cultural practices being strongly influenced by a multitude of religions, including Buddhism, Christianity, Confucianism, Hinduism, and Islam, all strong in the major trading cities"/>
        <TripData image="https://media.istockphoto.com/id/1309924207/photo/traffic-captured-with-blurred-motion-rush-along-the-main-avenue-lined-with-skyscrapers-in-the.jpg?b=1&s=170667a&w=0&k=20&c=NbQeWJbzbJ8cweZJF9Yk814WBQdaCiff2cHzXFujPvc=" heading = "Trip In Malaysia" text="Indonesia is centrally-located along ancient trading routes between the Far East, South Asia and the Middle East, resulting in many cultural practices being strongly influenced by a multitude of religions, including Buddhism, Christianity, Confucianism, Hinduism, and Islam, all strong in the major trading cities"/>
        <TripData image="https://images.unsplash.com/photo-1528702748617-c64d49f918af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8RHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" heading = "Trip In Indonesia" text ="Dubai culture and arts are largely determined by its Islamic religion and traditional Arab culture. The influence of both on the country's architecture, music, dress, cuisine, and lifestyle are very prominent"/>
        
        </div>
    </div>
  )
}
