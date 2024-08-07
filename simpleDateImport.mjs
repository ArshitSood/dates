import { SimpleDate, simpleDate } from "./simpleDateExport.mjs";

/*const x = simpleDate();
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
*/
// console.log(x.add(4, 'days').utc().toString());

// const x = simpleDate();
// console.log(x.toString());
// console.log(x.utc());
// console.log(x.add(4, 'months').toString());
// console.log(x.format('YYYY-MM-DD HH:mm:ss'));

// const y = simpleDate('2004/05/04');
// console.log(y.format('DD/MM/YYYY HH:mm').toString());

const x = simpleDate('2024-07-04T12:30:45');
console.log(x.format('YYYY-MM-DD HH:mm:ss'));
console.log(x.format('MMM DD, YYYY'));
console.log(x.format('MM/DD/YY'));
console.log(x.format('D-MMMM-YYYY'));