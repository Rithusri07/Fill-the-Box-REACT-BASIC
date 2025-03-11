import React,{useState} from 'react'
import Color from './Color';
import Box from './Box'
export default function App() {
  const[search,setSearch]=useState('');
  const[hexValue,sethexvalue]=useState('');
  return (
    <>
    <h1 style={{textAlign:'center'}}>Fill the Color</h1>
    <Box
    colors={search}
    hexValue={hexValue}
    />
     <Color
     search={search}
     setSearch={setSearch}
     />
    </>
  );
}
