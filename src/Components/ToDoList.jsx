import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useReducer } from "react";


const initialState = 0;

const reducer=(state , action)=>{
  if (action.type === "INCREMENT") {
    return state+1;
  } else if(action.type === "DECREMENT") {
    if (state > 0) {
      return state-1;
    } else {
      // alert("cannot dec anymore")
      return state;
    }
  }
  // return state;
}
function ToDoList() {
  // const [num, setNum] = useState(0);
  const [state , dispatch] = useReducer(reducer , initialState);


  // const incFn=()=>{
  //   setNum(num+1);
  // }
  // const decFn=()=>{
  //   if (num>0) {
  //       setNum(num-1);
  //   } else {
  //       alert("oops!!sorry but you can't decrement below 0");
  //       setNum(0);
  //   }
  // }
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1>{state}</h1>
          <div className="button-div">
            <Tooltip title="Increment" className="tootip">
            <Button onClick={()=>dispatch({type:"INCREMENT"})} className="btn-green"><AddIcon/></Button>
            </Tooltip>
            <Tooltip title="Decrement" className="tooltip">
            <Button onClick={()=>dispatch({type:"DECREMENT"})} className="btn-red"><RemoveIcon/></Button>
            </Tooltip>


            {/* <Button variant="contained" onClick={incFn}><AddIcon/></Button>
            <Button variant="contained" onClick={decFn}><RemoveIcon/></Button> */}
            {/* <button onClick={incFn}><AddIcon/></button>
            <button onClick={decFn}><RemoveIcon/></button> */}

          </div>
        </div>
      </div>
    </>
  );
}



































// function ToDoList() {
//   const [num, setNum] = useState(0);

//   const incFn=()=>{
//     setNum(num+1);
//   }
//   const decFn=()=>{
//     if (num>0) {
//         setNum(num-1);
//     } else {
//         alert("oops!!sorry but you can't decrement below 0");
//         setNum(0);
//     }
//   }
//   return (
//     <>
//       <div className="main-div">
//         <div className="center-div">
//           <h1>{num}</h1>
//           <div className="button-div">
//             <Tooltip title="Increment" className="tootip">
//             <Button onClick={incFn} className="btn-green"><AddIcon/></Button>
//             </Tooltip>
//             <Tooltip title="Decrement" className="tooltip">
//             <Button onClick={decFn} className="btn-red"><RemoveIcon/></Button>
//             </Tooltip>


//             {/* <Button variant="contained" onClick={incFn}><AddIcon/></Button>
//             <Button variant="contained" onClick={decFn}><RemoveIcon/></Button> */}
//             {/* <button onClick={incFn}><AddIcon/></button>
//             <button onClick={decFn}><RemoveIcon/></button> */}

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default ToDoList;
