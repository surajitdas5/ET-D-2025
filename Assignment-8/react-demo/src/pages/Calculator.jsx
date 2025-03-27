import { useState, useRef } from "react";

function Calculator(){
    const numOneRef = useRef(null);
    const numTwoRef = useRef(null);
    const[sum, setSum] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(numOneRef.current.value)
        let a = numOneRef.current.value
        let b = numTwoRef.current.value
        if(a == "" || b == ""){
            alert("Enter both the numbers")
            return
        } else if(isNaN(a) || isNaN(b)){
            alert("Both inputs must be numbers")
            return
        }
        a = Number(a)
        b = Number(b)
        setSum(a+b)

        numOneRef.current.value = ""
        numTwoRef.current.value = ""
    }

    return(
        <div className="row">
            <div className="col-md-4 mx-auto my-3">
                <h3>Add Two Numbes</h3>
                <form method="post" onSubmit={handleSubmit}>
                    <input ref={numOneRef} type="text" className="form-control mb-2" name="num1" placeholder="First Number" />
                    <input ref={numTwoRef} type="text" className="form-control mb-2" name="num2" placeholder="Second Number" />
                    <input type="submit" value="ADD" className="btn btn-primary" />
                </form>
                <h3>{sum}</h3>
            </div>
        </div>
    )
}

export default Calculator;