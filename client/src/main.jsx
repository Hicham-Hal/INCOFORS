import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inscription from './components/inscription/Inscription';
import Fpage from './components/pages/formationpage/Fpage';
import For2 from './components/pages/formations page/everyformationpage/formation2/For2';
import For3 from './components/pages/formations page/everyformationpage/formation3/For3';
import For4 from './components/pages/formations page/everyformationpage/formation4/For4';
import Formation from './components/pages/formations page/Formation';
import Pictures from './components/pages/galeries/images/Pictures';
import Nformation from './components/pages/homeDashboard/add formation/Nformation';
import InscriptionDash from './components/pages/homeDashboard/inscription/InscriptionDash';
import PVadd from './components/pages/homeDashboard/photovideo/PVadd';
import Home from './components/pages/homeDashboard/statistiques/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Homepage from './components/pages/homepage/Homepage';
import { AppProvider } from './context';
import customFetch from './utils/customFetch';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { action as registerAction } from './components/pages/Register';
import { action as LoginAction } from './components/pages/Login';
// async function main(){
//   const response=await customFetch('/test')
//   console.log(response.data.msg)
//  }
//  main()

const router = createBrowserRouter([

  {
    path:'/contact',
    element: <InscriptionDash/>
  },

  {
    path: '/galeries',
    element: <Pictures/>
  },
  {
    path: '/formations/course1',
    element: <Formation />,
  },
  {
    path: '/formations/course2',
    element: <For2/>
  },
  {
    path: '/formations/course3',
    element: <For3/>
  },
  {
    path: '/formations/course4',
    element: <For4/>
  },
  {
    index: true,
    element: <Homepage/>
  },
  {
    path: '/statistique',
    element: <Home/>
  },
  {
    path: '/inscription',
    element: <InscriptionDash/>
  },

  {
    path: '/inscriptions',
    element: <Inscription/>
  },
  {
    path: '/formation/course/:id',
    element: <Fpage/>
  },
  {
    path: '/photo-video',
    element: <PVadd/>
  },
  {
    path: '/ajouteformation',
    element: <Nformation/>,
  },
  {
    path:'/register',
    element:<Register/>,
    action:registerAction,
  },
  {
    path:'/login',
    element:<Login/>,
    action:LoginAction,
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
    <ToastContainer position='top-center'/>
  </React.StrictMode>
);