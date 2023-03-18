import { Link } from 'react-router-dom';
import './style.css';
import MOI from '../../assets/images/portrait-beautifu.jpg';
import MSI from '../../assets/images/emotional-happy.jpg';

function HeroTwo() {
  return (
    <div className='hero-two'>
        <div className="flex-images">
            <div className="first-model">
                <img src={MOI} alt="" />
            </div>
            <div className="second-model">
                <img src={MSI} alt="" />
            </div>
        </div>
        <div className="flot-button">
            <h2>The Best <br /> Raw & Price</h2>
            <Link to='/shop'>
                <button>Shop Now</button>
            </Link>
        </div>
    </div>
  )
}

export default HeroTwo