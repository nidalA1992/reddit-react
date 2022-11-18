import React, { useEffect, useState } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { useRequestToken } from './hooks/useRequestToken';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Post } from './shared/Post';
import MainPage from './shared/pages/MainPage';
import NotFoundPage from './shared/pages/NotFoundPage';


function AppComponent() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useRequestToken();

  return (
    <>
      {mounted && 
      <Router>
        <Switch>
          <Route exact path={['/', '/auth', '/posts', '/posts/:id']}>
            <MainPage />
          </Route>
          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    }
    </>
  );
}

export const App = hot(() => 
  <Provider store={store}>
    <AppComponent />
  </Provider>
);
