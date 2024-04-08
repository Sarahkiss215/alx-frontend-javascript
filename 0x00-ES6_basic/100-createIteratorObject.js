export default function createIteratorObject(report) {
   let employee = [];
   for (let [dept, emply] of Object.entries(report.allEmployees)){
        for (let e of emply){
            employee.push(e);
        }
   }
   return employee;
}
