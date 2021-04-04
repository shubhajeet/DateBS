import { DateBS } from "https://raw.githubusercontent.com/shubhajeet/DateBS/master/src/index.ts";

let today = DateBS.fromAD();
console.log(today);
console.log(today.toAD());

let start = new Date("1994-01-01")
console.log(start);
console.log(DateBS.fromAD(start))
