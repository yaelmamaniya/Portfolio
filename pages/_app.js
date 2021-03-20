import React from 'react';
import App from 'next/app';

import 'antd/dist/antd.css';
import '../styles/tailwind.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...pageProps} />;
  }
}

export default MyApp;
