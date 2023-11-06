import './Card.css';

const Card = ({ title, description, image}) => {
    return(
        <div className='card'>
            <img src={image} alt='icon'/>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    );
};


export default Card;