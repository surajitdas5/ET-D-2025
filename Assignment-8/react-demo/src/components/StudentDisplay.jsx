import React from 'react'

const StudentDisplay = ({ students, deleteStudent }) => {
  return (
    <div className='table-responsive'>
        <table className='table table-bordered border-info'>
            <thead className='text-center'>
                <tr>
                    <th>Roll</th>
                    <th>Name</th>
                    <th>CGPA</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map( s => (
                        <tr key={s.roll}>
                            <td>{s.roll}</td>
                            <td>{s.name}</td>
                            <td>{s.cgpa}</td>
                            <td className='text-center'>
                                <button 
                                className='btn btn-sm btn-danger'
                                onClick={()=>deleteStudent(s.roll)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default StudentDisplay