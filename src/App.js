import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import BasicMessage from './Components/BasicMessage';
import Body from './Components/Body';
import EmployeeForm from './Components/EmployeeForm';
import ErrorElement from './Components/ErrorElement';
import Navbar from './Components/NavBar';
import PropDrilling from './Components/PropDrilling/PropDrilling';
import StopWatch from './Components/StopWatch';

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
