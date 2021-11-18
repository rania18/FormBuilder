import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Button, TextField } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
function Checkbox({option}) {
  const [fields, setFields] = useState([]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value.split(',');
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
    option(fields)
    
    // console.log(typeof(fields))
  }

  function handleRemove(e) {
    console.log(e, "e");
    const values = [...fields];
    for (var i = 0; i < values.length; i++) {
      if (i === e) {
        values.splice(i, 1);
      }
    }
    setFields(values);
  }

  return (
    <div className="App">
      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <CheckBoxOutlineBlankIcon />
            <TextField
              type="text"
              placeholder="Enter text"
              onChange={(e) => handleChange(idx, e)}
            />
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={() => handleRemove(idx)}
            >
              <ClearIcon />
            </Button>
          </div>
        );
      })}
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={() => handleAdd()}
      >
        <AddIcon />
        Add
      </Button>
    </div>
  );
}

export default Checkbox;
