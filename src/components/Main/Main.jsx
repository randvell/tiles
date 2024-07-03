import style from './Main.module.css';
import {Route, Routes} from 'react-router-dom';
import Layout from '../Layout';
import Modal from '../Modal';
import Home from './Home';
import Page404 from '../Pages/Page404';
import PageAuth from '../Pages/PageAuth';
import Tiles from './Tiles';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/tile/:id"
          element={
            <>
              <Tiles />
            </>
          }
        >
          <Route path="tile/:id/" element={<Modal />} />
        </Route>
        <Route path="/auth" element={<PageAuth />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  </main>
);
