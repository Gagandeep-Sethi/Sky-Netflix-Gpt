import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
//import Error from './components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);


reportWebVitals();
// children:[{
      
      

// }],
// errorElement:<Error/>