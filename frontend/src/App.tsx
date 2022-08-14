import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page } from './pages/Page';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
