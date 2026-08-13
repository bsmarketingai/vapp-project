/* VAPP — jediný zdroj pravdy pro měny v prototypu.
   Ceny v datech jsou vždy v CZK; EUR se počítá kurzem RATE_EUR. */
(function () {
  var RATE_EUR = 25; // demo kurz: 1 EUR = 25 CZK
  function group(s) { return String(s).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0'); }
  function convert(czk, currency) {
    var n = Number(czk) || 0;
    return currency === 'EUR' ? n / RATE_EUR : n;
  }
  function format(czk, currency) {
    var v = convert(czk, currency);
    if (currency === 'EUR') {
      return group(Math.floor(v)) + ',' + String(Math.round((v - Math.floor(v)) * 100)).padStart(2, '0') + '\u00A0€';
    }
    return group(Math.round(v)) + '\u00A0Kč';
  }
  function formatShort(czk, currency) {
    var v = convert(czk, currency);
    return currency === 'EUR' ? group(Math.round(v)) : group(Math.round(v));
  }
  function symbol(currency) { return currency === 'EUR' ? '€' : 'Kč'; }
  window.VappMena = { RATE_EUR: RATE_EUR, convert: convert, format: format, formatShort: formatShort, symbol: symbol };
})();
