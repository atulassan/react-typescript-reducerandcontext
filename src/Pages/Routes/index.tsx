import React from 'react';
//import Categories from '../Categories';
//import Tasks from '../Tasks';
import { useRoutes } from 'react-router-dom';

const Categories = React.lazy(()=>import('../Categories'));
const Tasks = React.lazy(()=>import('../Tasks'));

const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: 
      <React.Suspense fallback={<>loading...</>}>
        <Categories />
      </React.Suspense>
       },
      { path: "/categories", element: 
        <React.Suspense fallback={<>loading...</>}>
          <Categories />
        </React.Suspense> 
      },
      { path: "/tasks", element: 
        <React.Suspense fallback={<>loading...</>}>
          <Tasks /> 
        </React.Suspense>
      },
      // ...
    ]);
    return routes;
  };

export default AppRoutes;