import React, {useEffect, useState } from 'react';
const App=()=>{
    const [num,setnum]=useState(0);

    useEffect(()=>{
        document.title=`you clicked me ${num} times`;
    })
    return(
        <>
        <button onClick={()=>{
            setnum(num + 1)
        }}>CLICK ME {num} </button>
        </>
    )
}
export default App;