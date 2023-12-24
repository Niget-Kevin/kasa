import banner from '../assets/images/IMG.png';
import '../style/layouts/banner.scss';
const title= banner
function Banner() {
    return (
        <section className='Banner'>
                <img className='Banner_img' src={banner} alt='Paysage' />
                {title && <p className='Banner_txt'>Chez vous, partout et ailleurs</p>}
        </section>     
    );
}

export default Banner;
