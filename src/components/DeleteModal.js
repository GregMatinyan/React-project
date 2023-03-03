import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

  export default function DeleteModal(props) {
    return (<Dialog
       open
       onClose={props.closeHandler} 
       aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
    <DialogTitle>
      {"Are you sure you want to remove this item?"}
    </DialogTitle>
    <DialogActions>
      <Button onClick={props.deleteHandler}>Yes</Button>
      <Button onClick={props.closeHandler} autoFocus>No</Button>
    </DialogActions>
    </Dialog>)
  }