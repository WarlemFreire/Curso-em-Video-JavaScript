var agora = new Date()
var diaSem = agora.getDay() //dias da semana em números sendo domingo 0 e sábado 6

//console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábato')
        break
    default:
        console.log('[ERRO] Data inválida')
}