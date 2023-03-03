import React from 'react'
import './Destination.css'
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <>
     <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot</p>
<DestinationData className="first-des" heading ="Taal Volcano Batangas" text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." img1="https://images.unsplash.com/photo-1523468410103-265bccacd832?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" img2 = "https://media.istockphoto.com/id/1081613490/photo/the-victoria-falls-and-the-zambezi-river-between-zambia-and-zimbabwe.jpg?s=170667a&w=0&k=20&c=GyQCZvtgyCUSLKqyZrlesstdVhtWbP8zaCC4WTU8EBs="/>

<DestinationData className="first-des-reverse" heading ="Taal Volcano Batangas" text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." img1="https://images.unsplash.com/photo-1523468410103-265bccacd832?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" img2 = "https://media.istockphoto.com/id/1081613490/photo/the-victoria-falls-and-the-zambezi-river-between-zambia-and-zimbabwe.jpg?s=170667a&w=0&k=20&c=GyQCZvtgyCUSLKqyZrlesstdVhtWbP8zaCC4WTU8EBs="/>
        </div> 
    </>
  )
}

export default Destination
