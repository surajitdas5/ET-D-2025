import { useState } from 'react'
import StudentAdd from '../components/StudentAdd'
import StudentDisplay from '../components/StudentDisplay'

const Sms = () => {
    const [ students, setStudents ] = useState([])
    const addStudent = (newStudent) => {
        setStudents([...students, newStudent])
    }
    const deleteStudent = (roll) => {
        let updStds = students.filter(s => s.roll !== roll)
        setStudents(updStds)
    }
  return (
    <div className='container my-3'>
        <div className="row">
            <div className="col-md-8 mx-auto">
                <StudentAdd addStudent={addStudent} />
                <StudentDisplay students={students} deleteStudent={deleteStudent} />
            </div>
        </div>
    </div>
  )
}

export default Sms