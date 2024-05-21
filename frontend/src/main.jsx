import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Dashboard from './screens/Dashboard.jsx';
import PageNotFound from './screens/PageNotFound.jsx';
import PorInput from './Forms/PorInput.jsx';
import ExistingPorNumbers from './components/ExistingPorNumbers.jsx';
import SupurthinamaInput from './Forms/SupurthinamaInput.jsx';
import JabtinamaInput from './Forms/JabtinamaInput.jsx';
import RajinamaInput from './Forms/RajinamaInput.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/porform' element={<PorInput/>} />
        <Route path='/supurthinamaform' element={<SupurthinamaInput/>}/>
        <Route path='/jabtinamaform' element={<JabtinamaInput/>}/>
        <Route path='/rajinamaform' element={<RajinamaInput/>}/>
        <Route path='/existingpornumbers' element={<ExistingPorNumbers/>} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
