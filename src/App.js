import Main from './Sections/Main';
import Footer from './Sections/Footer';
import Navbar from './Sections/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      textTransform: 'none',
      fontFamily: 'Outfit',

      color: '#000',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <Navbar />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
