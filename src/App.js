import DatePicker from 'react-datepicker';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';


function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setShow(true);
  };
  return (
    <div className="App">
     

      <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
        inline
      />

      {show ? <p><div className='start'>Start Date : {JSON.stringify(startDate.getDate())}.{JSON.stringify(startDate.getMonth() + 1)}.{JSON.stringify(startDate.getFullYear())}</div><hr style={{width:"350px"}}/><div className='end'>{endDate?"End Date : " : ""} {endDate ? JSON.stringify(endDate.getDate()) : ""}{ endDate?".":""}{endDate ? JSON.stringify(endDate.getMonth() + 1) : ""}{ endDate?".":""}{endDate?JSON.stringify(endDate.getFullYear()):""}</div></p>:""}

    </div>
  );
}

export default App;
