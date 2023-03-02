import "./App.css";
import Header from "./Components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };
  let removeItem = (index)=>{
    let arr = data;
    arr.splice(index,1)
    setData([...arr])
  }
  return (
    <div className="App">
      <Header />
      {/* Form */}
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            id="outlined-basic"
            onChange={(e) => {
              setName(e.target.value);
            }}
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            id="outlined-basic"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} color="success" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
        <hr />
      </div>
      {/* Data display */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button onClick={()=>removeItem(index)} color="error" variant="contained">
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
