import styles from './Grid.module.css'
import {level} from '../../helpers/imc'
import UpImg from '../../assets/up.png'
import downImg from '../../assets/down.png'

type Props = {
    item:level,
    key?:number
}

export function GridItem ({item}:Props){
    return(
     <div className={styles.main} style = {{backgroundColor:item.color}}>
         <div className={styles.gridIcon}> 
            <img src={item.icon ==='up' ? UpImg:downImg } width='30' />
         </div>
         <div className={styles.gridTitle}>
             {item.title}
         </div>
         {item.youerIMC &&
            <div className={styles.yourImc}> Seu Imc é de {item.youerIMC} kg/m²</div>
         }
         <div className={styles.gridInfo}>
             <>
             IMC esta entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
             </>
         </div>

     </div>  )
}