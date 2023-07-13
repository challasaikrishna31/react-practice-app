import logo from './logo.svg';
import './App.css';
import StopWatch from './Components/StopWatch';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from './Components/NavBar';
import Body from './Components/Body';
import BasicMessage from './Components/BasicMessage';

const AppLayout = () => {
  return (
    <div className='flex'>
      <Navbar />
      <Body />
    </div>
  )
}
function App() {
  return (
    <RouterProvider router={appRouter}></RouterProvider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BasicMessage />

      },
      {
        path: "/stopwatch",
        element: <StopWatch />

      }
    ]
  },

]);

export default App;
