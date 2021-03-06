import React from 'react';
import { Admin, Resource, userLogin } from 'react-admin';
import users from "./users";
import products from "./products";
import kiosks from "./kiosks";
import roles from "./roles";
import Dashboard from './dashboard/Dashboard';

 import CustomLoginPage from "./elements/login";
import { authProvider } from "./providers/auth";
import { client } from "./providers/client";
import { dataProvider } from "./providers";
import { realTimeProvider } from "./providers/realtime";

const App = () => (
  <Admin dashboard={Dashboard}
    authProvider={authProvider(client)}
    dataProvider={dataProvider}
    customSagas={[realTimeProvider]}
    loginPage={CustomLoginPage}
  >
    <Resource {...users} />
    <Resource {...products} />
    <Resource {...kiosks} />
    <Resource {...roles} />

     
  </Admin>

);

export default App;