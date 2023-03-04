import styles from "./App.module.css"
import powerImg from "./assets/powered.png"
import { useState } from "react"
import {levels, CalculateIMC, level} from './helpers/imc'
import {GridItem} from './components/gridItem/index'
import leftArrow from './assets/leftarrow.png'

function App() {

  
  const [altura,setAltura] = useState<number>(0)
  const [peso, setPeso] = useState<number>(0)
  const [mostrarItem, setMostrarItem] = useState<level |null>(null)

  function CalcularIMC(){
    if (altura && peso){
      setMostrarItem(CalculateIMC(altura,peso))
    }
    else{
      alert("Digite todos os Campos")
    }
  }

  function handleBackButton(){
    setMostrarItem(null)
    setAltura(0)
    setPeso(0)
  }

  return (
  <div className= {styles.main}>
    <header>
      <div className= {styles.headerContainer}>
        <img src={powerImg} alt="" width={150}/>
      </div>
    </header>

    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1> Calcule o seu IMC.</h1>
        <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

        <input 
        type="number" 
        value={altura>0 ?altura:""} 
        onChange={(event)=> setAltura(parseFloat(event.target.value))} 
        placeholder="Digite a sua altura. Ex: 1.5 (em metros)" 
        disabled={mostrarItem? true:false}
        />
        <input 
        type="number" 
        placeholder="Digite seu peso. Ex: 80.0 (em KG)"
        value={peso> 0? peso :""}
        onChange={(event)=>{setPeso(parseFloat(event.target.value))}}
        disabled={mostrarItem? true:false}
        />

        <button onClick={CalcularIMC} disabled={mostrarItem? true:false} >Calcular</button>
      </div>
      <div className={styles.rightSide}>
        {!mostrarItem &&
        <div className={styles.grid}>
          {levels.map((item,key)=> 
          <GridItem  item={item} />
          )}
        </div>}
        {mostrarItem &&
        <div className={styles.rightBig}>
          <div className={styles.rightArrow} onClick={handleBackButton}>
            <img src={leftArrow} alt="" />
          </div>
          <GridItem item = {mostrarItem} />
        </div>

        }
      </div>

    </div>

  </div>

  )
   
}

export default App
