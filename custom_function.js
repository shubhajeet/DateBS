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