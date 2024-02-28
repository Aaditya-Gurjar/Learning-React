import { useState, useCallback, useEffect, useRef } from 'react'

// import "./index.css"
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[characterAllowed, setCharacterAllowed] = useState(false);
  const[password, setPassword ] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789";
    if(characterAllowed) str += "!@#$%^&*()_+";
    
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() *str.length +1)
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
      window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(()=>{
    passwordGenerator();
  }, [length, characterAllowed, numberAllowed, passwordGenerator])


  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 px-10 pt-5   text-center text-white-500 bg-gray-800 " > Password Generater
  <div className="flex shadow rounded-lg overflow-hidden mb-4 text-center mt-1 py-5">
    <input
      type="text"
      value={password}
      className="outline-none w-full py-2  px-3 bg-gray-900 text-white rounded-lg px-5 text-center placeholder-gray-500"
      placeholder="Password"
      readOnly
      ref={passwordRef}
    />
    <button onClick={copyPasswordToClipboard} className="bg-blue-500 hover:bg-blue-600 mx-3 text-white font-bold py-2 px-4 rounded-lg">
      Copy
    </button>
  </div>

  <div className='flex text-sm gap-x-2 ml-2'>
    <div className='flex items-center gap-x-1 mb-5 ml-2'>
      <input type="range" min={6} max={100} value={length} className='cursor-pointer ' onChange={(e)=>{setLength(e.target.value)}} />
      <label >Length : {length} </label>
    </div>
    <div className='flex items-center gap-x-1 mb-5 ml-2'>
      <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{
        setNumberAllowed((prev) => !prev);
      }} />
      <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1 mb-5 ml-2 ">
          <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

    
  </div>
</div>

    </>
  )
}

export default App
