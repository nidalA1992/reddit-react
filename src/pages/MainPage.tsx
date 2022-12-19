import React from "react";
import { Redirect, Route } from "react-router-dom";
import { CardsList } from "../shared/CardsList";
import { Content } from "../shared/Content";
import { Header } from "../shared/Header";
import { Layout } from "../shared/Layout";
import { Post } from "../shared/Post";

const MainPage = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Route path={["/", "/auth"]}>
          <Redirect to={"/posts"} />
        </Route>
        <Route path={"/posts"}>
          <CardsList />
          <Route path={"/posts/:id"}>
            <Post />
          </Route>
        </Route>
      </Content>
    </Layout>
  );
};

export default MainPage;
