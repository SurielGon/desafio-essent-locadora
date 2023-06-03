export function brlToNumber(brl: string){
    const replacedMoney = brl.replace('R$', '').replaceAll('.', '').replaceAll(',', '.').trim()
    const asNumber = Number(replacedMoney)
    return asNumber
}