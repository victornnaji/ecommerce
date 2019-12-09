export function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array;
}

export function toMoney(money){
   return Math.ceil(money)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}