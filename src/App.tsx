import './App.css'
import Block1 from './Component/Block1/Block1'
import Block2 from './Component/Block2/Block2'
import Block3 from './Component/Block3/Block3'
import Block4 from './Component/Block4/Block4'
import Block5 from './Component/Block5/Block5'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'

function App() {
  return (
    <>
      <Header></Header>
      <div className='app-content'>

        <Block1></Block1>
        <Block2></Block2>
        <Block3></Block3>
        <Block4></Block4>
        <Block5></Block5>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
