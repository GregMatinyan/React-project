import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  listItem: {
    padding: 10,
    backgroundColor: "#B4EEF5",
    border: "1px solid black",
  },
});

export default function ToDoList(props) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const styles = useStyles();

  const agreeToDelete = () => {
    props.removeItem(props.data.id);
  };

  const agreeToEdit = (value) => {
    setOpenEdit(false);
    props.editItem(props.data.id, value);
  };

  const closeHandler = () => {
    setOpenEdit(false);
    setOpenDelete(false);
  };

  const checkHandler = () => {
    props.checkItem(props.data.id);
    console.log(styles.listItem);
  };

  return (
    <>
      <li className={props.data.checkStatus ? styles.listItem : null}>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.data.checkStatus}
              onChange={checkHandler}
            />
          }
          label={props.data.item}
        />
        <Button
          style={{
            marginLeft: 15,
          }}
          variant="outlined"
          size="small"
          onClick={() => setOpenEdit(true)}
        >
          <CreateIcon />
        </Button>
        <Button
          style={{
            marginLeft: 15,
          }}
          variant="outlined"
          size="small"
          onClick={() => setOpenDelete(true)}
        >
          <DeleteIcon />
        </Button>
      </li>
      {openEdit && (
        <EditModal
          editHandler={agreeToEdit}
          closeHandler={closeHandler}
          itemName={props.data.item}
        />
      )}
      {openDelete && (
        <DeleteModal
          deleteHandler={agreeToDelete}
          closeHandler={closeHandler}
        />
      )}
    </>
  );
}
