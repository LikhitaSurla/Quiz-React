import React ,{useState}from 'react';



export default function Answer({c},idx) {
    const{text,correct}=c
    const [myStyle,setMyStyle] = useState('white')
    const func=(c)=>{
        if(correct===true){
            setMyStyle('green')
        }else{
            
            setMyStyle('maroon')
        }
    }
  return (
  <>
  <div className='options'>
    <button className='btn' style = {{backgroundColor:myStyle}} key={idx} onClick={func}>{text}</button>
    </div>
  </>
  )
}