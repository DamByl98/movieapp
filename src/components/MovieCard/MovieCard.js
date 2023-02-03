import React from 'react'
import Card from 'react-bootstrap/Card';
import './MovieCard.css'

function MovieCard(props) {
  const {data} = props;
  return (
    <div className='cards'>
    <Card className="bg-dark text-white" id='card'>
    <Card.Img src={data.Poster} alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>{data.Title}</Card.Title>
      <Card.Text>{data.Year}</Card.Text>
    </Card.ImgOverlay>
  </Card>
  </div>
  )
}

export default MovieCard