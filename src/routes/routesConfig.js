import { lazy } from 'react';
import {
  Navigate
} from "react-router-dom";
const OnBoard = lazy(() => import('../Page/OnBoard'));
const NotFound = lazy(() => import('../Page/Page404'));

const routes = () => [
  { path: '/', element: <Navigate to="/onboard/0" /> },
  { path: '/onboard/:pageId', element: <OnBoard /> },
  { path: '/*', element: <NotFound /> },
];

export default routes;
