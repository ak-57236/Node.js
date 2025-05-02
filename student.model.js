// studentID , studentName, studentEmail, studentPhone, studentAddress, studentDOB, studentGender
const  { DataTypes } = require('sequelize');
const { sequelize } = require('../Connection');
 const student = (sequelize) => {
    const Student = sequelize.define("student", {
        studentID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        studentName: {
            type: DataTypes.STRING,
        },
        studentEmail: {
            type: DataTypes.STRING,
        },
        studentPhone: {
            type: DataTypes.STRING,
        },
        studentAddress: {
            type: DataTypes.STRING,
        },
        studentDOB: {
            type: DataTypes.DATE,
        },
        studentGender: {
            type: DataTypes.STRING,
        },
    });
    return Student;
}
module.exports = student;