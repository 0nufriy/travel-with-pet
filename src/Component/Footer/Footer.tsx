import './Footer.css'
import telegramIcon from '../../static/image/teletgram.png'
import star from '../../static/image/star.png'

function Footer() {
  return (
    <div className='footer-conteiner'>
        <div className='footer-description'>
            <img className='footer-star' src={star}/>
            <span className='footer-first-text'>Sorularınız mı var?</span>
            <span className='footer-second-text'>Sadece telefon numaranızı bırakın, en kısa sürede sizinle iletişime geçeceğiz</span>
        </div>
        <div className='footer-bottom'>
            <div className='footer-phone'>+1 (</div>
            <a href='http://google.com' target="_blank" ><img alt='telegram' src={telegramIcon}  className='footer-telegram'/></a>
        </div>
            
    </div>
  )
}

export default Footer
