import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function EditModal(props) {
  const [inputValue, setInputvalue] = useState(props.itemName);

  return (
    <Dialog open onClose={props.closeHandler}>
      <DialogContent>
        <DialogContentText>
          {`Edit name of list item ${props.itemName}`}
        </DialogContentText>
        <TextField
          onChange={(e) => setInputvalue(e.target.value)}
          autoFocus
          margin="dense"
          value={inputValue}
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.closeHandler}>Cancel</Button>
        <Button
          onClick={() => {
            props.editHandler(inputValue);
          }}
        >
          Apply changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
