import LogoTitle from '../../assets/images/M_logo.png'
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                    <img scr={LogoTitle} alt="developer" />
                    arvin
                    <br />
                    web developer
                </h1>
                <h2>Software Developer / JavaScript Expert</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home