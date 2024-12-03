import { Link } from "react-router";
import "./Card.scss";

export interface I_Card {
  id: number | string;
  title: string;
  image: string;
  description?: string;
}

const Card: React.FC<I_Card> = ({ title, image, description, id }) => {
  return (
    <Link style={{textDecoration:'none', color:'inherit'}} to={`movie/${id}`} className="card">
      <div  className="image">
        <img src={image} alt="" />
      </div>
      <div className="card__details">
        <a className="card__details-title">{title}</a>
        <p className="card__details-description">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
