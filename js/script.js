let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 100 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
}
function calculateTotalSalary(department) {
    let totalSalary = 0;

    if (Array.isArray(department)) {
        department.forEach(employee => {
            totalSalary += employee.salary;
        });
    } else if (typeof department === 'object' && department !== null) {
        for (let subDepartment in department) {
            totalSalary += calculateTotalSalary(department[subDepartment]);
        }
    }

    return totalSalary;
}

let totalSalary = calculateTotalSalary(company);
console.log("Total salary:", totalSalary);
