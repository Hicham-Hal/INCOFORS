import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Fpage from './components/pages/formationpage/Fpage';
import For1 from './components/pages/formations page/everyformationpage/formation1/For1';
import For2 from './components/pages/formations page/everyformationpage/formation2/For2';
import For3 from './components/pages/formations page/everyformationpage/formation3/For3';
import For4 from './components/pages/formations page/everyformationpage/formation4/For4';
import Formation from './components/pages/formations page/Formation';
import Pictures from './components/pages/galeries/images/Pictures';
import Nformation from './components/pages/homeDashboard/add formation/Nformation';
import InscriptionDash from './components/pages/homeDashboard/inscription/InscriptionDash';
import PVadd from './components/pages/homeDashboard/photovideo/PVadd';
import Home from './components/pages/homeDashboard/statistiques/Home';
import Homepage from './components/pages/homepage/Homepage';
import Login, { action as LoginAction } from './components/pages/Login';
import Register, { action as registerAction } from './components/pages/Register';
import Signin from './components/Sign/sign in/Signin';
import Signup from './components/Sign/sign up/Signup';
import { AppProvider } from './context';
import './index.css';


const router = createBrowserRouter([

  {
    path:'/contact',
    element: <InscriptionDash/>
  },
  {
    path: '/pictures',
    element: <Pictures/>
  },
  // {
  //   path: '/videos',
  //   element: <Video/>
  // },
  {
    path: '/formations',
    element: <Formation/>
  },
  {
    path: '/formations/élève',
    element: <For1/>,
  },
  {
    path: '/formations/étudiant',
    element: <For2/>
  },
  {
    path: '/formations/professionnel',
    element: <For3/>
  },
  {
    path: '/formations/doctorat',
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
    path: '/sign-in',
    element: <Signin/>
  },
  {
    path: '/formation/course/:_id',
    element: <Fpage/>
  },
  {
    path: '/photo-video',
    element: <PVadd/>
  },
  {
    path: '/ajouteformation',
    element: <Nformation/>
  },
  {
    path: '/Sign-up',
    element: <Signup/>
  },
  {
    path:'/registers',
    element:<Register/>,
    action:registerAction,
  },
  {
    path:'/login  ',
    element:<Login/>,
    action:LoginAction,
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);