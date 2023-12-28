import React, { useEffect } from 'react'
import hiasan1 from '../../Img/hiasan-1.png'
import akad from '../../Img/akad.png'
import resepsi from '../../Img/resepsi.png'
import bgakad from '../../Img/compress/1.jpg'
import bgresepsi from '../../Img/compress/2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Acara() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className='my-16'>
        <div className='flex justify-center mb-8'>
          <img src={hiasan1} data-aos="fade-up" alt='hiasan1' className='w-[80px]' />
        </div>
        <h1 data-aos="fade-up" className='text-center text-4xl font-semibold custom-font-3 mx-4 mb-16 text-[#477aa9]'>Waktu & Lokasi <br /> Acara</h1>
        <div className='flex justify-center mb-8 mx-4'>
          <div id="acara" className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            <div data-aos="fade-up" className='rounded-2xl relative bg-akad' style={{ backgroundImage: `url(${bgakad})` }}>
              <div className='absolute rounded-2xl w-full h-full bg-black/50'></div>
              <div className='relative py-16 px-8'>
                <center>
                  <img src={akad} className='w-[50px] mb-8' alt='akad' />
                </center>
                <h1 className='text-white font-bold text-5xl custom-font-2 mb-4 text-center'>Akad Nikah</h1>
                <center>
                  <div className='w-24 rounded-lg h-1 bg-white mb-4'></div>
                </center>
                <h1 className='text-white text-center font-normal arial mb-8'>Jumat <br /> 12 JANUARI 2024 <br /> PUKUL 14.00 WIB - SELESAI</h1>
                <center>
                  <div className='w-24 rounded-lg h-1 bg-white mb-4'></div>
                </center>
                <h1 className='text-center text-white mb-8'><b>• Kediaman Mempelai Wanita •</b> <br />Jl. Jend Sudirman gg.Nangka <br/> samping accessories Veronika</h1>
              </div>
            </div>
            <div data-aos="fade-up" className='rounded-2xl relative bg-resepsi' style={{ backgroundImage: `url(${bgresepsi})` }}>
              <div className='absolute rounded-2xl w-full h-full bg-black/50'></div>
              <div className='relative py-16 px-8'>
                <center>
                  <img src={resepsi} className='w-[50px] mb-8' alt='resepsi' />
                </center>
                <h1 className='text-white font-bold text-5xl custom-font-2 mb-4 text-center'>Ngunduh Mantu</h1>
                <center>
                  <div className='w-24 rounded-lg h-1 bg-white mb-4'></div>
                </center>
                <h1 className='text-white text-center font-normal arial mb-8'>Minggu <br /> 14 JANUARI 2024 <br /> PUKUL 11.00 WIB - SELESAI</h1>
                <center>
                  <div className='w-24 rounded-lg h-1 bg-white mb-4'></div>
                </center>
                <h1 className='text-center text-white mb-8'><b>• Kediaman Mempelai Laki-laki •</b> <br />Jl. Tribrata Hangtuah <br/> Duri, Kec. Mandau. Bengkalis-Riau </h1>
              </div>
            </div>
          </div>
        </div>
        <center>
          <div data-aos="fade-up" className='max-w-4xl mx-6 rounded-xl'>
            <div className="mapouter mb-8"><div className="gmap_canvas"><iframe title='maps' className="gmap_iframe rounded-xl shadow-lg" width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.840233493483!2d101.17758597405243!3d1.2686231618334587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d37b6786a80433%3A0x324c866aef520be!2sJl.%20Tri%20Brata%20Hangtuah%2C%20Duri%20Bar.%2C%20Kec.%20Mandau%2C%20Kabupaten%20Bengkalis%2C%20Riau%2028784!5e0!3m2!1sid!2sid!4v1703788430193!5m2!1sid!2sid"></iframe></div></div>
            <center>
              <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/QJUsPGJPDmiZwbn47" className="text-white text-md bg-[#477aa9] hover:bg-[#31261d] font-bold rounded-xl px-5 py-3.5 mr-2 mb-2">
                <FontAwesomeIcon icon={faMapLocation} /> Lihat Lokasi Ngunduh Mantu
              </a>
            </center>
          </div>
        </center>
      </div>
    </>
  )
}
