let heroi = "Arnold "
let xp = 5001

switch(xp !== null){

    case xp <= 1000:
        console.log("O héroi de nome " + heroi + "está no nível de FERRO")
        break;
    case xp <=2000:
        console.log("O héroi de nome " + heroi + "está no nível de BRONZE")
        break;
    case xp <= 5000:
        console.log("O héroi de nome " + heroi + "está no nível de PRATA")
        break;
    case xp <=7000:
        console.log("O héroi de nome " + heroi + "está no nível de OURO")
        break;
    case xp <=8000:
        console.log("O héroi de nome " + heroi + "está no nível de PLATINA")
        break;
    case xp <= 9000:
        console.log("O héroi de nome " + heroi + "está no nível de ASCENDENTE")
        break;
    case xp <=10000:
        console.log("O héroi de nome " + heroi + "está no nível de IMORTAL")
        break;
    case xp >=10001:
        console.log("O héroi de nome " + heroi + "está no nível de RADIANTE")
        break;
    default:
        let teste = xp <= 5000
        console.log(teste)
        console.log("Caso indefinido!")
        break;
}
