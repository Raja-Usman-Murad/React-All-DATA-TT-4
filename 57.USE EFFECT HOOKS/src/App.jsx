import React, { useEffect, useState } from 'react'
const App=()=>{
    const [num,setNum]=useState(0);
    const [nums,setNums]=useState(1);

    useEffect(()=>{
        alert('hello');
    },[nums])

    const onclick=()=>{
                setNum(num + 1)
         }
    const onClick=()=>{
                setNums(nums + 1)
         }
    return(
        <>
<button onClick={onclick}>CLICK ME {num}</button>
<br />
<button onClick={onClick}>CLICK ME {nums}</button>
        </>
    )
}
export default App;