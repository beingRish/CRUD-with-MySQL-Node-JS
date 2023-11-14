const db = require('../db')

module.exports.getAllEmployees = async () => {
    const [records] = await db.query("SELECT * FROM employee")
        .catch(err => console.log(err))
    return records;
}

module.exports.getEmployeeById = async (EmpID) => {
    
    try {
        console.log(EmpID);
        const [records] = await db.query(`SELECT * FROM employee WHERE EmpID = ${EmpID}`);
        console.log(records);
        return records;
    } catch (err) {
        console.error(err);
        // Handle the error or throw it further if needed
        throw err;
    }
}


module.exports.DeleteEmployee = async (EmpID) => {
    
    try {
        console.log(EmpID);
        const [records] = await db.query(`DELETE from employee WHERE EmpID = ${EmpID}`);
        console.log(records);
        return records;
    } catch (err) {
        console.error(err);
        // Handle the error or throw it further if needed
        throw err;
    }
}

