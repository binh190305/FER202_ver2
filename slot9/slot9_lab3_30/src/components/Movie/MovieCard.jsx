import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import "./MovieCard.css";

export default function MovieCard({img, title, text, genre}) {
  return (
    <Card className="movie-card">
      <div className="movie-card-img-wrapper">
        <Card.Img variant="top" src={img} className="movie-card-img" />
      </div>
      <Card.Body className="movie-card-body">
        <Card.Title className="movie-card-title">{title}</Card.Title>
        <Card.Text className="movie-card-text">
          {text}
        </Card.Text> 
        <div className="movie-card-genre">
          <span className="genre-badge">{genre}</span>
        </div>   
        <div className="movie-card-actions">
          <Button variant="primary" className="btn-details">Details</Button>
          <Button variant="outline-warning" size="sm" className="btn-favorite">
            Add to Favourite
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}