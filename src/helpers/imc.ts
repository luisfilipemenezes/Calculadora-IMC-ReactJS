export type level = {
    title:string,
    color:string,
    icon:'down'| 'up',
    imc:number[],
    youerIMC?:number;
}


export const levels:level[] = [
    {title:'Magreza', color:'#96a3ab',icon:'down', imc:[0,18.5]},
    {title:'Normal', color:'green', icon:'up', imc:[18.6,24.9]},
    {title:'Sobrepeso', color:'#E2B039', icon:'down', imc:[25,30]},
    {title:'Obesidade', color:'#C3423F', icon:'down', imc:[30.1,99]},
]

export function CalculateIMC(height:number,weigth:number){
    const imc = weigth/(height*height);
    for(let i in levels){
        if(imc> levels[i].imc[0] && imc<levels[i].imc[1]){
            let levelCopy:level = {...levels[i]}
            levelCopy.youerIMC = parseFloat( imc.toFixed(2))
            return levels[i]
        }
    }
    return null

}