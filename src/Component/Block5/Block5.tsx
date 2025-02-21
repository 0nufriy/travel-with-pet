import './Block5.css'
import image1 from "../../static/image/block5-1.png"
import image2 from "../../static/image/block5-2.png"
import image3 from "../../static/image/block5-3.png"
function Block5() {
  return (
    <div className='block-5'>
        <div className='block-5-content'>
            <div className='block-5-title'>
            Birlikte keyifle seyahat edin!
            </div>
            <div className='block-5-text'>
            Evcil hayvanlarınızla seyahat etmek unutulmaz anlar yaşamanızı sağlar ve aranızdaki bağı güçlendirir. Güvenliği ve konforu unutmayın, seyahatiniz mükemmel olsun.
            </div>
        </div>
        
        <div className='block5-images'>
            <div className="block5-image-1">
                <img alt="Dogs in airplane" src={image1}/> 
            </div>
            <div className="block5-image-2">
                <img alt='Dog on a station' src={image2}/> 
            </div>
            <div className="block5-image-3">
                <img alt="Dog in suitcase" src={image3}/>
            </div>
        </div>
    </div>
  )
}

export default Block5
