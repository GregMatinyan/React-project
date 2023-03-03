import "./App.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import ToDoList from "./components/ToDoList";
import TextField from "@mui/material/TextField";
import { v4 } from "uuid";

export default function App(props) {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  const addItem = () => {
    if (inputValue.length > 0) {
      setItems(
        items.concat({ item: inputValue, id: v4(), checkStatus: false })
      );
      setInputValue("");
    }
  };
  const checkItem = (id) => {
    setItems(
      items.map((elem) => {
        return elem.id === id
          ? ((elem.checkStatus = !elem.checkStatus), elem)
          : elem;
      })
    );
  };
  const checkAll = () => {
    setItems(
      items.map((elem) => {
        return { ...elem, checkStatus: true };
      })
    );
  };
  const removeItem = (id) => {
    setItems(items.filter((elem) => elem.id !== id));
  };
  const removeChecked = () => {
    setItems(items.filter((elem) => elem.checkStatus !== true));
  };
  const editItem = (id, value) => {
    setItems(
      items.map((elem) => {
        return elem.id === id ? ((elem.item = value), elem) : elem;
      })
    );
  };
  return (
    <>
      <div className="App">
        <h3>ToDo list</h3>
        <div>
          <TextField
            size="small"
            value={inputValue}
            onChange={onChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addItem();
              }
            }}
            id="outlined-basic"
            label="Enter task"
            variant="outlined"
          />
          <Button variant="outlined" onClick={addItem}>
            Add
          </Button>
        </div>
        <ol>
          {items.map((elem) => {
            return (
              <ToDoList
                key={elem.id}
                data={elem}
                removeItem={removeItem}
                editItem={editItem}
                checkItem={checkItem}
              />
            );
          })}
        </ol>
        {items.length > 0 && (
          <>
            <Button variant="outlined" onClick={checkAll}>
              Check all
            </Button>
            <Button variant="outlined" onClick={removeChecked}>
              Remove checked items
            </Button>
          </>
        )}
      </div>
    </>
  );
}
