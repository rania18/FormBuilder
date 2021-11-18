import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  NativeSelect,
  Select,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import ShortTextIcon from "@material-ui/icons/ShortText";
import Checkbox from "./Checkbox";
import Multiplechoice from "./Multiplechoice";
import Textbox from "./Textbox";
import {useDispatch} from 'react-redux'
import {createForm} from '../actions/form.js'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: "60%",
  },
  btn: {
    marginLeft: 20,
  },
  paper: {
    position: "absolute",
    // alignContent:"center",
    width: "60%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    top:0 ,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
function ModalQue({handleClose}) {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [choice, setChoice] = useState("");
  const [modalStyle] = React.useState(getModalStyle);
  const [questionsAnswers, setQuestionsAnswers] = useState([]);
  const [question, setQuestion] = useState({
    formName:"",
    queTitle: "",
    options: {},
  });
  useEffect((e) => {
    console.log(choice);
  }, [choice]);
  const ansChoice = (e) => {
    setChoice(e.target.value);
  };
  const anstypecomp = () => {
    if (choice == "checkbox") {
      return <Checkbox option={optionsHandler} />;
    }
    if (choice == "multiplechoice") {
      return <Multiplechoice option={optionsHandler} />;
    } else {
      return <Textbox option={optionsHandler} />;
    }
  };
  const optionsHandler = (fields) => {
    function getFields(input, field) {
      var output = [];
      for (var i=0; i < input.length ; ++i)
          output.push(input[i][field]);
      return output
  }
  
  var result = getFields(fields, "value"); 
  console.log(result, "result")
    setQuestion({ ...question, options: fields });
  };

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createForm(question))
    handleClose(e)
  };
  return (
    <div>
      <div style={modalStyle} className={classes.paper}>
        <TextField
          className={classes.textField}
          id="outlined-basic"
          label="Form Title"
          name="formName"
          value={question.formName}
          onChange={(e) => setQuestion({ ...question, formName: e.target.value })}
        />

        <TextField
          className={classes.textField}
          id="outlined-basic"
          label="Question"
          name="queTitle"
          value={question.creator}
          onChange={(e) =>
            setQuestion({ ...question, queTitle: e.target.value })
          }
        /> <br/>
        <FormControl  className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Type input</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            name="ansChoice"
            onChange={ansChoice}
          >
            <MenuItem value={"checkbox"}>
              <CheckBoxIcon /> Check Box
            </MenuItem>
            <MenuItem value={"multiplechoice"}>
              <RadioButtonCheckedIcon /> Multiple Choice
            </MenuItem>
            <MenuItem value={"textbox"}>
              <ShortTextIcon /> Text
            </MenuItem>
          </Select>
        </FormControl>

        {anstypecomp()}

        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          type="button"
          onClick={submitHandler}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default ModalQue;
