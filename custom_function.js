/*
* @param datestring: date in BS
* @return date in AD
* @customfunction
*/
function DateToAD(datestring) {
  return DateBS.fromString(datestring).toAD();
}

/*
* @param datestring: date in AD
* @return date in BS
* @customfunction
*/
function DateToBS(datestring) {
  return DateBS.fromAD(datestring).toString();
}

/*
 * @param datestring: date in BS
 * @return month in number
 * @customfunction
 */
function BSMonth(datestring) {
    return DateBS.fromString(datestring).month;
}
/*
  * @param datestring: date in BS
  * @return month name in english
  * @customfunction
  */
function BSMonthString(datestring) {
    return DateBS.fromString(datestring).monthInString();
}

/*
  * @param datestring: date in BS
  * @return month name in nepali
  * @customfunction
  */
function BSMonthNepali(datestring) {
    return DateBS.fromString(datestring).monthInStringNepali();
}

/*
 * @param datestring: date in BS
 * @return month name in nepali
 * @customfunction
 */
function BSFinancialYear(datestring) {
    return DateBS.fromString(datestring).financialYear();
}
