import './Tile.css';
import slobe from '../../Images/Group 371.png';


const Tile = ({ title, description }) => {
    return(
        <div className='ti'>
            <div className='tile'>
            <img src={slobe} alt=''/>
            <h5>{title}</h5>
            </div>
            <p className='tile-p'>{description}</p>
        </div>
    );
};


export default Tile;