import React from "react";
import { Redirect, Route } from "react-router-dom";
import { CardsList } from "../CardsList";
import { Content } from "../Content";
import { Header } from "../Header";
import { Layout } from "../Layout";
import { Post } from "../Post";

const MainPage = () => {
  return ( 
    <Layout>
      <Header />
      <Content>
        <Route path={['/', '/auth']}>
          <Redirect to={'/posts'}/>
        </Route>
        <Route path={'/posts'}>
          <CardsList/>
          <Route path={'/posts/:id'}>
            <Post />
          </Route>
        </Route>
      </Content>
    </Layout>
   );
}
 
export default MainPage;
