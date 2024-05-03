import src from '../icons_assets/restauranfood.jpg'

export default function IntroImage() {
    return <div className='intro-image'>
        <img src={src} alt="Food in the kitchen" className='intro-img' />
    </div>
}