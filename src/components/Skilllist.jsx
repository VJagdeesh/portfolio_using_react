// import "./FormStyles.css";

// import React from 'react'

// const Skilllist = () => {
//   return (
//     <div className="form">
//     <li style={{color:"red"}}>React JS</li>
//     <li style={{color:"red"}}>Java</li>
//     <li style={{color:"red"}}>Python</li>
//     <li style={{color:"red"}}>AWS</li>
//     <li style={{color:"red"}}>DSA</li>
//     <li style={{color:"red"}}>Linux</li>
//     <li style={{color:"red"}}>My SQL</li>
//     <li style={{color:"red"}}>Cryptography</li>
//     <li style={{color:"red"}}>Object Oriented Programming</li>    
//     {/* <form>
//     <label>Your Name</label>
//     <input type="text"/>
//     <label>E-Mail</label>
//     <input type="email"/>
//     <label>Subject</label>
//     <input type="text"/>
//     <label>Message</label>
//     <textarea rows="6" placeholder="Type anything if you want.............."/>
//     <button className="btn">Submit</button>
//     </form> */}
//     </div>
//   )
// }

// export default Skilllist;


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// const rows = [
//   {serial:"1",name:'React JS'},{serial:"2",name:'Java'},{serial:"3",name:'Python'},{serial:"4",name:'AWS'},{serial:"5",name:'DSA'},
//   {serial:"6",name:'Linux'},{serial:"7",name:'My SQL'},{serial:"8",name:'Cryptography'},{serial:"9",name:'Object Oriented Programming'},{serial:"10",name:'C++'}];

export default function Skilllist(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: "100vw" }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            {props.headings.map((heading)=>(<TableCell><b>{heading}</b></TableCell>))}
            {/* <TableCell><b>Serial Number</b></TableCell>
            <TableCell><b>Skills</b></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.serial} 
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name} 
              </TableCell>
              {row.certification != undefined && <TableCell component="th" scope="row">
                <a style={{color:"blue"}} onClick={()=>{window.open(row.certification)}}>Click here</a> 
              </TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

