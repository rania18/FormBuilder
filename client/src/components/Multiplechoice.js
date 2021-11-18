import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import {
    Button,
    TextField,
} from "@material-ui/core";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ClearIcon from '@material-ui/icons/Clear';

function Multiplechoice({option}) {
  const [fields, setFields] = useState([{ value: null }]);
  
  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
    option(fields)
  }

  const handleRemove=(e)=>{
    const values = [...fields];
    for (var i = 0; i < values.length; i++) {
        if (i === e) {
          values.splice(i, 1);
        }
      }   
      console.log(values)
    setFields(values);
  }
    return (
      <div className="App">

  
       
  
        {fields.map((field, idx) => {
          return (
            <div key={`${field}-${idx}`}>
            <RadioButtonUncheckedIcon/>
              <TextField
                type="text"
                placeholder="Enter text"
                onChange={e => handleChange(idx, e)}
              />
              <Button variant="contained" color="primary" type="button" onClick={() => handleRemove(idx)}>
                <ClearIcon/>
              </Button>
            </div>
          );
        })}
         <Button variant="contained" color="primary" type="button" onClick={() => handleAdd()}>
          <AddIcon/>
          Add
        </Button>
      </div>
    );
  }

export default Multiplechoice;
