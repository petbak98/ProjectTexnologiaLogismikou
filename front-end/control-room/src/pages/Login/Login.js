import React from "react";
import { TextField, Button } from "@material-ui/core";
import { LoginContainer, FormContainer } from "./Login.style";
import { ReactComponent as LoginIcon } from "../../assets/icons/auth.svg";

export default function Login() {
  return (
    <LoginContainer>
      <LoginIcon style={{ width: "100%", height: "300px" }} />
      <FormContainer noValidate autoComplete='off'>
        <TextField
          fullWidth={true}
          style={{ marginTop: 10 }}
          variant='outlined'
          margin='normal'
          label='ΑΡΙΘΜΟΣ ΜΗΤΡΩΟΥ'
        />
        <TextField
          fullWidth={true}
          variant='outlined'
          margin='normal'
          type='password'
          style={{ marginTop: 10 }}
          label='Κωδικός'
        />
      </FormContainer>
      <Button
        style={{ padding: 10, marginTop: 10, backgroundColor: "#3F3C56" }}
        fullWidth={true}
        variant='contained'
        color='secondary'
      >
        ΣΥΝΔΕΣΗ
      </Button>
    </LoginContainer>
  );
}
