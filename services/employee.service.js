const db = require('../db')

module.exports.getAllEmployees = async () => {
    const [records] = await db.query("SELECT * FROM employee")
        .catch(err => console.log(err))
    return records;
}

module.exports.getEmployeeById = async (EmpID) => {
    
    try {
        const [[record]] = await db.query(`SELECT * FROM employee WHERE EmpID = ${EmpID}`);
        return record;
    } catch (err) {
        console.error(err);
        // Handle the error or throw it further if needed
        throw err;
    }
}


module.exports.DeleteEmployee = async (EmpID) => {
    
    try {
        const [{affectedRows}] = await db.query(`DELETE from employee WHERE EmpID = ${EmpID}`);
        return affectedRows;
    } catch (err) {
        console.error(err);
        // Handle the error or throw it further if needed
        throw err;
    }
}


module.exports.addOrEditEmployee = async (obj, EmpID=0) => {
    
    try {
        const [[[{affectedRows}]]] = await db.query("CALL employee_add_or_edit(?,?,?,?)", [EmpID, obj.Name, obj.EmpCode, obj.Salary]);
        return affectedRows;
    } catch (err) {
        console.error(err);
        // Handle the error or throw it further if needed
        throw err;
    }
}
