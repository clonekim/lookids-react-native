const PATTERN = {
  MONEY: /(^[+-]?\d+)(\d{3})/,
};


export default {

  currencyFormat (value) {
    value += ''

    while(PATTERN.MONEY.test(value)) {
      value = value.replace(PATTERN.MONEY ,'$1' + ',' + '$2')
    }
    return value    
  }

}
