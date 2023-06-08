export function brlToNumber(brl: string) {
  const replacedMoney = brl
    .replace('R$', '')
    .replaceAll('.', '')
    .replaceAll(',', '.')
    .trim();
  const asNumber = Number(replacedMoney);
  return asNumber;
}

export function numberToBrl(value: number) {
  const currencyFloat = value / 100;
  const brl = currencyFloat.toLocaleString('pt-br', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  });
  return brl;
}
