import React, {useMemo, useState} from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Pages from "./components/Pages";
import { Navbar } from "./components/Navbar";
import {usePrevious} from "./hooks/usePrevious";
import { a, useTransition } from "react-spring";

function App() {
  const [index, setIndex] = useState(0)
  const location = useLocation();
  const memoizedIndex = usePrevious(index);
  const transition = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: memoizedIndex > index ? "translate3d(100%,0,0)" : "translate3d(-1000%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: memoizedIndex < index ? "translate3d(100%,0,0)" : "translate3d(-100%,0,0)" },
  });
  return (
    <>
      <Navbar setIndex={setIndex}/>
      {transition.map(({ item: location, props, key }) => {
        return (
          <a.div
            key={key}
            style={{
              ...props,
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
                height: "90%"
            }}
          >
            <Switch>
              <Route path={"/page1"}>
                <Pages
                  data={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, neque."
                  }
                />
              </Route>
              <Route path={"/page2"}>
                <Pages
                  data={
                    "Aliquam atque eveniet fugiat ipsum, sint vel? Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
                  }
                />
              </Route>
              <Route path={"/page3"}>
                <Pages
                  data={
                    "Privet lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, neque. "
                  }
                />
              </Route>
            </Switch>
          </a.div>
        );
      })}
    </>
  );
}

export default App;
