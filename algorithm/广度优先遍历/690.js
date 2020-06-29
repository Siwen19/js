/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    function getPerson(num) {
        let targetStaff;
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === num) {
                targetStaff = employees[i];
                return getSum(targetStaff);;
            }
        }
    }

    let firstValue = 0;

    function getSum(target) {
        firstValue += target.importance;
        target.subordinates.forEach((i) => {
            getPerson(i);
        });
    }
    getPerson(id);

    return firstValue;
};
