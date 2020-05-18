import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from '@sentry/browser';
import App from "./components/App";

Sentry.init({dsn: "https://883a8190caae4c458130ba5b9f34f751@sentry.io/2649151"});

ReactDOM.render(<App/>, document.querySelector("#root"));
