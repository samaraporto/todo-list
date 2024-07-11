import { FormEvent, useEffect, useRef, useState } from "react"


export const Refs: React.FC = ()=>{
    const ref = useRef(0)//current: 0
    const inputNameRef = useRef<HTMLInputElement>(null)//current:null
    console.log(inputNameRef)
    useEffect(()=>{console.log(inputNameRef)}, [inputNameRef])
    const [toggle, setToggle] = useState(false)

    const inputEmailRef = useRef<HTMLInputElement>(null)
    const inputPasswordRef = useRef<HTMLInputElement>(null)
    

    function handleOnSubmit(event: FormEvent){
        event.preventDefault()
        console.log(inputNameRef.current?.value)//inputNameRef é um elemento html input
        console.log(inputEmailRef.current?.value)
        console.log(inputPasswordRef.current?.value)
    }

    function handleClickOnButton(){
        ref.current = ref.current + 1
        console.log(ref.current)
    }
    function handleInput(){
        if(inputNameRef.current) {
            inputNameRef.current.focus()
        }
    }
    return(
        <form style={{padding: '2rem'}} onSubmit={(event)=>handleOnSubmit(event)}>
            <h1>ref</h1>

            <p>{`O valor de ref é ${ref.current}`}</p>

            <button onClick={handleClickOnButton}>click here!</button>
            <br/>
            <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>

            <input type="text" placeholder="nome completo" ref={inputNameRef}/>{/*o valor desse input vai para o current do inputNameRef*/}

            <input type="email" placeholder="email" ref={inputEmailRef}/>
            <input type="password" placeholder="password" ref={inputPasswordRef}/>
            <button onClick={handleInput}>foque no input</button>

            <button type="submit">submeter</button>
        </form>
    )
}