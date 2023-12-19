import Banner from '../assets/images/IMG.png';
import '../style/base/_normalize.scss';
import '../style/pages/home.scss';

function Home() {
   return (
      <section>
         <div className='Banner'>
            <img className='Banner_img' src={Banner} alt='Paysage' />
            <p className='Banner_txt'>Chez vous, partout et ailleurs</p>
         </div>
      </section>
   );
}

export default Home;
