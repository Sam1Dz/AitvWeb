import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

// IMPORT : COMPONENTS
import LoadingLogo from "../components/loading";

// IMPORT : PAGE
const Layout = lazy(() => import("./layout"));
const Home = lazy(() => import("./home"));
const Test = lazy(() => import("./content/test"));

export default function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingLogo />}>
        <Switch>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="test" element={<Test />} />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
