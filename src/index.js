import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './index.scss';

import Layout from 'components/Layout';
import SuspenseFallback from 'components/SuspenseFallback.js';

const Home = lazy(() => import(/* webpackChunkName: "core" */ 'pages/Home'));

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Layout>
      <Suspense fallback={<SuspenseFallback />}>
        <Routes>
          <Route element={<Home />} index />
        </Routes>
      </Suspense>
    </Layout>
  </Router>
);
