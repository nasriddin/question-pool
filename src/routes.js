import React from 'react';

const Home = React.lazy(()=>import('./routes/Home'))

const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
];

export default routes;