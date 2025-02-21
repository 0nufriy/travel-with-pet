import './Block1.css'
import Block1Card from './Block1Card'

function Block1() {
  return (
    <div className='block-1'>
          <div className='block-1-title'>
            Seyahat için bir ulaşım aracı seçimi
          </div>
          <div className='block-1-cards'>
            <Block1Card color='#FFFFFF' number='1' text='Kendi aracınızla seyahat etmek, etrafı dolaşmanın en rahat yoludur. Hareket halindeyken yaralanmaları önlemek için hayvanlara özel taşıyıcılar veya emniyet kemerleri kullanın.'></Block1Card>
            <Block1Card color='#FFFFFF' number='2' text="Türkiye'de toplu taşıma araçlarında hayvanların taşınmasına ilişkin kurallar farklılık göstermektedir. Örneğin metro ve otobüslerde küçük hayvanların taşıyıcılarla taşınmasına izin veriliyor ancak detayları önceden netleştirmek daha iyi."></Block1Card>
            <Block1Card color='#000000' number='3' text='Havayoluyla seyahat edecekseniz, hayvanların taşınmasına ilişkin gereklilikler hakkında havayolu şirketine danışın. Genellikle evcil hayvanın boyutuna uygun bir taşıma çantası ve sağlık sertifikası gereklidir.'></Block1Card>
            <Block1Card color='#000000' number='4' text='Kısa yolculuklar için, evcil hayvanınız uzun mesafeleri tek başına kat edemiyorsa rahat bir sırt çantası veya taşıyıcı seçin.'></Block1Card>
          </div>
          
        </div>
  )
}

export default Block1
