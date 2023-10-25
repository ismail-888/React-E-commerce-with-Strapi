import Header from "./components/header/Header";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ToTop from "./components/scroll/ToTop";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

{/* <motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:5}}

className="border">
  ali hassan
</motion.div> */}

        <Header />
        <Header2 />
        <Header3 />
        <Box bgcolor={theme.palette.bg.main}>
          <Hero />
          <Main />
        </Box>
      <Footer />
      <ToTop/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
