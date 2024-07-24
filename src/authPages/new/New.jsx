import { useState } from "react";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const New = ({ inputs, title }) => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        roles: null,
        timeStamp: serverTimestamp(),
      });
      navigate("/authPage"); // Redirect to /authPage after successful user creation
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          <Box component="form" onSubmit={handleAdd} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {inputs.map((input) => (
                <Grid item xs={12} sm={6} key={input.id}>
                  <TextField
                    required
                    fullWidth
                    id={input.id}
                    label={input.label}
                    name={input.id}
                    autoComplete={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </Grid>
              ))}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Account
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

const inputs = [
  { id: "displayName", label: "Name and surname", type: "text", placeholder: "John Doe" },
  { id: "username", label: "Username", type: "text", placeholder: "john_doe" },
  { id: "email", label: "Email", type: "email", placeholder: "john_doe@gmail.com" },
  { id: "password", label: "Password", type: "password", placeholder: "password" },
  { id: "phone", label: "Phone", type: "text", placeholder: "+1 234 567 89" },
  { id: "address", label: "Address", type: "text", placeholder: "Elton St. 216 NewYork" },
  { id: "country", label: "Country", type: "text", placeholder: "USA" },
];

export default function App() {
  return <New inputs={inputs} title="Add New User" />;
}
