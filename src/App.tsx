import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Box } from '@mui/material';
import { appRouter } from './router/router';

function App() {
  return (
    <Box className="App">
      <RouterProvider router={appRouter} />
    </Box>
  );
}

export default App;
