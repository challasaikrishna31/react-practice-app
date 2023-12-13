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
import ErrorElement from './Components/ErrorElement';
import EmployeeForm from './Components/EmployeeForm';
import PropDrilling from './Components/PropDrilling/PropDrilling';

const AppLayout = ({ Component }) => {
  return (
    <div className='flex'>
      <Navbar />
      {Component ? <Component /> : <Body />}
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
    errorElement: <AppLayout Component={ErrorElement} />,
    children: [
      {
        path: "/",
        element: <BasicMessage />

      },
      {
        path: "/stopwatch",
        element: <StopWatch />

      },
      {
        path: "/employeeform",
        element: <EmployeeForm />

      },
      {
        path: "/propdrilling",
        element: <PropDrilling />

      }
    ]
  },

]);

export default App;
