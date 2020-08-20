import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";

interface IApp {
  store: any;
  pageProps: any;
  Component: any;
}

class MyApp extends App<IApp> {
  render() {
    console.log("this.props", this.props);
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
