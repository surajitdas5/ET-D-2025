import { useRef} from 'react'

const StudentAdd = ({ addStudent }) => {
    const rollRef = useRef(null)
    const nameRef = useRef(null)
    const cgpaRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        let roll = rollRef.current.value
        let name = nameRef.current.value
        let cgpa = cgpaRef.current.value
        // let newStd = {
        //     "roll": roll,
        //     "name": name,
        //     "cgpa": cgpa,
        // }
        let newStd = { roll, name, cgpa }
        addStudent(newStd)
        rollRef.current.value = ""
        nameRef.current.value = ""
        cgpaRef.current.value = ""
    }
  return (
    <div className="">
        <h3 className='text-center'>Manage Students</h3>
        <form method="post" onSubmit={handleSubmit}>
            <div className='row g-2 my-4'>
                <div className="col-md-3">
                    <input ref={rollRef} type='text' className='form-control' placeholder='Roll' required />
                </div>
                <div className="col-md-3">
                    <input ref={nameRef} type='text' className='form-control' placeholder='Name' required />
                </div>
                <div className="col-md-3">
                    <input ref={cgpaRef} type='text' className='form-control' placeholder='CGPA' required />
                </div>
                <div className="col-md-3">
                    <input type="submit" value="ADD" className='btn btn-primary w-100' />
                </div>

            </div>
        </form>
    </div>
  )
}

export default StudentAdd