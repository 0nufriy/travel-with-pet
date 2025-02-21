import './Block1.css'
interface BlockCardProps{
  number: string
  text: string
  color: string
}
function Block1Card(props: BlockCardProps) {
  return (
    <div className='block-1-card'>
         <div style={{color: props.color}} className='block-1-number'>
            {props.number}
        </div>
        <div  className='block-1-text'>
            {props.text}
        </div>
    </div>
  )
}

export default Block1Card
