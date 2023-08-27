import React, { useState } from 'react';
import './App.css';

export const Register = (props) => {
    const [inputArr, setInputArr] = useState([]);
    const [inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        branch: "",
        rollNo: ""
    });

    function handleChange(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setInputArr([...inputArr, inputData]);
        console.log(inputArr);
        console.log(inputData);

        // Reset the inputData state to clear the form
        setInputData({
            firstName: "",
            lastName: "",
            branch: "",
            rollNo: ""
        });
    }

    return (
        <>
            <div className="studentData">
                <form id="form1" onSubmit={handleSubmit}>
                    <input type="text" placeholder="First Name" name="firstName" required onChange={handleChange} value={inputData.firstName} />
                    <input type="text" placeholder="Last Name" name="lastName" required onChange={handleChange} value={inputData.lastName} />
                    <input type="text" placeholder="Branch" name="branch" required onChange={handleChange} value={inputData.branch} />
                    <input type="number" placeholder="Roll No" name="rollNo" required onChange={handleChange} value={inputData.rollNo} />
                    <button type="submit">Submit</button>
                </form>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Branch</th>
                        <th>Roll No.</th>
                        <th>Attendance</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {inputArr.map((student, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.branch}</td>
                            <td>{student.rollNo}</td>
                            <td>Present</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
