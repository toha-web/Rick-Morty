import { ThemeProvider, createTheme, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Default from "../../pages/Default";
import Main from "../Main";
import NotFound from "../../pages/404";

import Header from '../Header';
import Footer from "../Footer";


const theme = createTheme({
    typography: {
        fontFamily: "Karla, sans-serif",
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    minHeight: "calc(100vh - 210px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                },
            },
        },
    },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Header />
          <Container component="main">
              <Routes>
                  <Route path="/" element={<Default />} />
                  <Route path="characters/:id?" element={<Main />} />
                  <Route path="locations/:id?" element={<Main />} />
                  <Route path="episodes/:id?" element={<Main />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </Container>
          <Footer />
      </ThemeProvider>
  );
}

export default App;
