import './App.css';

import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { useState } from 'react';
const array = []
function App() {
  const [name, setname] = useState("");
  const [Rollno, setRollno] = useState("");
  const [CheckInTime, setCheckInTime] = useState("");
  const [CheckOutTime, setCheckOutTime] = useState("");
  const [uparray, setuparray] = useState([]);
  const [Length, setLength] = useState(0);
  const SetData = () => {
    if (name === "" || Rollno === "" || CheckInTime === "" || CheckOutTime === "") {
      alert("please fill all the fields");
    }
    else {
      const datas = {
        id: name,
        Roll: Rollno,
        CheckIn: CheckInTime,
        CheckOut: CheckOutTime
      }
      const Additonal = datas;
      array.push(Additonal)
      const Updates = array;
      setuparray(Updates)
      setLength(Updates.length)
      setname("")
      setRollno("")
      setCheckInTime("")
      setCheckOutTime("")
    }
  }
  return (
    <div className="App">
      <Box>Total student = {Length}</Box>
      <Box style={{ marginTop: "1%", }}>
        <TextField value={name} placeholder='Enter name' label="Enter Name" variant="outlined" style={{ margin: "1%", width: "30%" }} onChange={(e) => setname(e.target.value)} />
        <TextField value={Rollno} placeholder='Enter Roll no' label="Enter Roll no" variant="outlined" style={{ margin: "1%", width: "30%" }} onChange={(e) => setRollno(e.target.value)} /><br />
        <TextField value={CheckInTime} placeholder='check In Time' label="check In Time" variant="outlined" style={{ margin: "1%", width: "30%" }} onChange={(e) => setCheckInTime(e.target.value)} />
        <TextField value={CheckOutTime} placeholder='check out time' label="check out time" variant="outlined" style={{ margin: "1%", width: "30%" }} onChange={(e) => setCheckOutTime(e.target.value)} /><br />
        <Button variant="contained" style={{ width: "30%", margin: "1%" }} onClick={SetData}>Add</Button>
      </Box>
      <div className='MappingStu'>
        <div className='StuDetails1'>Name</div>
        <div className='StuDetails1'>Roll NO</div>
        <div className='StuDetails1'>Availabilty</div>
      </div>
      {
        uparray.map((item) => (
          <div className='MappingStu1'>
            <div className='StuDetails'>{item.id}</div>
            <div className='StuDetails'>{item.Roll}</div>
            <div className='StuDetails'>Present</div>
          </div>
        ))
      }


    </div>
  );
}

export default App;
