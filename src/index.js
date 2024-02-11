import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Browser from './components/Browser';
import Error from './components/Error';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import MovieDetails from './components/WatchMovie';
import WatchMovie from './components/WatchMovie';
import GPTSearch from './components/GPTSearch';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/",
      element:<Login/>,
    },
    {
      path:"/browser",
      element:<Browser/>
    },
    {
      path:"/details",
      element:<MovieDetails/>
    },
    {
      path:"/watch/:movieId",
      element:<WatchMovie/>
    },
    {
      path:"/gptsearch",
      element:<GPTSearch/>
    },

    ],errorElement:<Error/>
  
  },
  

  {
    path:"/error",
    element:<Error/>
  },
  
])
root.render(
  // <React.StrictMode>
    <Provider store={appStore}>
    <RouterProvider router={appRouter}/>
    </Provider>
  //</React.StrictMode>
);


reportWebVitals();

