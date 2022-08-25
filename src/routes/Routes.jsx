import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routesConfig';

function Routes() {
  const element = useRoutes(routes());

  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
}

export default Routes;
