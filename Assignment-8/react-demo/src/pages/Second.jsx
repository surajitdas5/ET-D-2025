import { useState } from "react";

function Second(){
    // let i = 0;
    // const something = useState(10)
    // console.log(something)
    // const [ i, func ] = useState(0)
    const [ i, setI ] = useState(0)
    const [ visible, setVisible ] = useState(true)
    function handleClick(){
        // i=i+1;
        // func(i+1)
        setI(i+1)
        console.log(`Button is clicked ${i} times`);
    }

    function showHide(){
        setVisible(!visible)
    }
    console.log("re-rendered...")
    return (
        <>
            <p>Clicked: {i}</p>
            <button onClick={handleClick}>Click</button>
            {/* {
                visible ? (
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quidem odit libero nemo possimus iste tenetur provident ut voluptatem ratione.</p>

                ) : (
                    ""
                )
            } */}
            {
                visible && (
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quidem odit libero nemo possimus iste tenetur provident ut voluptatem ratione.</p>

                ) 
            }
            
            <button onClick={showHide}>
                {
                    visible ? "Hide" : "Show"
                }
            </button>
        </>
    )
}

export default Second