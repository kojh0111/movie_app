import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      {/* path="/" exact={true}가 의미하는 바는 "/"일 때만 렌더하겠음 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
