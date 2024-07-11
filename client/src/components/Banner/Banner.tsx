import './Banner.scss'
const bannerImage = require('../../assets/imgs/banner.jpg')
const Banner = () => {
  return (
    <div className='banner'>
        <img src={bannerImage} alt='banner' className='banner-image'/>
    </div>
  )
}

export default Banner