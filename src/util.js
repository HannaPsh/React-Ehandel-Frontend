export default function formatCurrency(num) {
  return 'SEK ' + Number(num.toLocaleString()) + ' ';
}
