import './App.css';
import 'flowbite';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='app'>
      <Toaster></Toaster>
      <RouterProvider router={router}>
      </RouterProvider>
    </div >
  );
}

export default App;
