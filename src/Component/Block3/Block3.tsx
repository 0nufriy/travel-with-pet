import './Block3.css'
import image from "../../static/image/block3.png"

function Block3() {
  return (
    <div className='block-3'>
        <div className='block-3-content'>
            <div className='block-3-title'>
            Seyahat etmeden önce evcil hayvanımı beslemem gerekir mi?
            </div>
            <li className='block-3-text'>
            Seyahat sırasında sindirim sorunları yaşamamak için evcil hayvanınızı uçuştan 
            3-4 saat önce beslemeniz önerilir.
            </li>
        </div>
        
       <img alt='Dog with suit case' src={image} className='block-3-image'/>
    </div>
  )
}

export default Block3
