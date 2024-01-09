import '../style/components/footer.scss';
import Image from '../assets/images/logo_footer.png';

function Footer() {
    return (
        <footer className='footer'>
            <img className='footer_logo' src={Image} alt='logo Kasa'></img>
            <p className='footer_txt'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
