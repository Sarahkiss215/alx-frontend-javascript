export default function iterateThroughObject(reportWithIterator) {
   let s = '', j = 0;
   for (const item of reportWithIterator) {
        if (reportWithIterator.length - 1 == j) {
            s += item
        }
        else {
            s += item + ' | ';
        }
        j++;
   }
   return itemstr;
}
