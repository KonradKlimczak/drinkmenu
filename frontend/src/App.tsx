import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { createTheme, ThemeProvider } from '@mui/material';
import { NotFound } from './pages/NotFound';
import { Page } from './pages/Page';

const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<Home />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
