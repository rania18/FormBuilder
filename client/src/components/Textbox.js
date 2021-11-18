import { TextField } from '@material-ui/core'
import React from 'react'

function Textbox({option}) {
    return (
        <div>
               <TextField
          id="outlined-full-width"
          style={{ margin: 8 }}
          placeholder="Type your answer here."
         
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={e=>{option(e.target.value)}}
        />
        </div>
    )
}

export default Textbox
