import { Link } from 'react-router';
import './Card.scss';


interface I_Card {
    id: number | string,
    title: string,
    image: string,
    description?: string,
}

const Card: React.FC<I_Card> = ({ title, image, description, id }) => {
    return (
        <div className="card">
            <Link to={`item/${id}`} className="card__imgBlock">
                <img className='card__imgBlock__img' src={image} alt='' />
            </Link>
            <div className="card__details">
                <a className='card__details__title'>{title}</a>
                <p className='card__details__description'>{description}</p>
            </div>
        </div>
    )
}

export default Card;