import React, { useState } from "react";
import { Button, Container, Modal, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ModalQue from "./ModalQue";
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
}));

function AddQuestions() {
  const classes = useStyles();
  

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    
    setOpen(false);
  };
  return (
    <div>
      <Container width={700} align="center">
        <form autoComplete="off" maxWidth="lg">
        <Typography className={classes.title} variant="h5" gutterBottom>
        </Typography>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            type="button"
            onClick={handleOpen}
          >
            <AddIcon /> 
            create Form
          </Button>
        </form>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ModalQue handleClose={handleClose}/>
        </Modal>
      </Container>
    </div>
  );
}

export default AddQuestions;
