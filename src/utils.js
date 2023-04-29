function getCurrencySymbol(currency='') {
    if (currency === 'dollar') {
        return '$';
    } else if (currency === 'euro') {
        return '€';
    } else if (currency === 'pound') {
        return '£';
    } else if (currency === 'ruppee') {
        return '₹';
    } else return ''
}
export default getCurrencySymbol