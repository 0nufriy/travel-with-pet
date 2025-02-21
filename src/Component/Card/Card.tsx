import './Card.css'

interface CardProps{
    lable: string
    text: string
}

function Card(props: CardProps) {
  return (
    <div className='card-container'>
        <div className='card-lable'>
            {props.lable}
        </div>
        <div className='card-text'>
            {props.text}  
        </div>
    </div>
  )
}

export default Card
