import { SimpleDate } from "./simpleDateExport.mjs";

const x = new SimpleDate();
console.log(x.toString());
x.add(3, "YeArS");
x.subtract(5, "DAy");
console.log(x.toString());

const z = new SimpleDate;
const y = new SimpleDate('05-04-2004');

console.log(z.toString());
console.log(y.toString());
console.log(z.isSame(z));
console.log(x.isSame(y));

console.log(x.isAfter(y));
console.log(x.isBefore(y));

console.log(x.utc());