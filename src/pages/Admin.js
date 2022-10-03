import React, { useEffect, useState } from "react";
import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { loadWeb3 } from "../methods/LoadWeb3";
import ContractAbi from "../abis/Register.json";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "13rem",
  },
  paper: {
    width: "35rem",
    height: "50rem",
    backgroundColor: "#EEEEEE",
  },
  colorDiv: {
    background: "#1572A1",
    height: "6rem",
    display: "flex",
    alignItems: "center",
  },
  typo: {
    fontFamily: "Roboto",
    marginLeft: "5rem",
    fontSize: "2rem",
  },
  div1: {
    marginTop: "4rem",
  },
  TextField: {
    width: "28rem",
    margin: "1rem",
  },
  Button: {
    width: "25rem",
    marginTop: "4rem",
  },
}));
export default function Admin() {
  const classes = useStyles();
  const [data, setData] = useState(null);

  const handleTransaction = async () => {
    if (data.name && data.party && data.v_id) {
      const web3 = window.web3;
      const account = await web3.eth.getAccounts();
      const networkID = await web3.eth.net.getId();
      const networkData = ContractAbi.networks[networkID];
      if (networkData) {
        const contract = new web3.eth.Contract(
          ContractAbi.abi,
          networkData.address
        );
        console.log(data);
        await contract.methods
          .RegisterVoter(
            data.name.toString(),
            data.party.toString(),
            data.v_id.toString()
          )
          .send({ from: account[0] })
          .once("reciept", (reciept) => {
            console.log(reciept);
          });
      }
    } else {
      alert("Fill up the form correctly");
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  useEffect(() => {
    loadWeb3();
  }, []);
  return (
    <div className={classes.root} align="center">
      <Paper className={classes.paper} elevation={3}>
        <div align="center" className={classes.colorDiv}>
          <Typography color="secondary" align="center" className={classes.typo}>
            Candidate Registration Form
          </Typography>
        </div>
        <div className={classes.div1} onChange={handleChange}>
          <TextField
            helperText={
              <Typography color="primary">
                Please enter candidate name
              </Typography>
            }
            label="Name"
            id="name"
            className={classes.TextField}
            variant="outlined"
            type="text"
          />
          <TextField
            label="Voter ID No"
            id="v_id"
            className={classes.TextField}
            variant="outlined"
            helperText={
              <Typography color="primary">
                Please enter candidate voter id no
              </Typography>
            }
            type="text"
          />
          <TextField
            helperText={
              <Typography color="primary">
                Please enter candidates' party
              </Typography>
            }
            label="Party"
            id="party"
            className={classes.TextField}
            variant="outlined"
            type="text"
          />
        </div>
        <Button
          className={classes.Button}
          onClick={handleTransaction}
          color="primary"
          variant="contained"
        >
          Register
        </Button>
      </Paper>
    </div>
  );
}
