import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Foo from "./Foo/Foo.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import About from "./About/About.jsx";
import Admissions from "./Admissions/Admissions.jsx";
import People from "./People/People.jsx";
import StudentLife from "./StudentLife/StudentLife.jsx";
import Research from "./Research/Research.jsx";
import NewsAndEvents from "./NewsAndEvents/NewsAndEvents.jsx";
import Academics from "./Academics/Academics.jsx";
import Courses from "./Courses/Courses.jsx";
import Bachelor from "./Bachelor/Bachelor.jsx";
import Master from "./Master/Master.jsx";
import Doctoral from "./Doctoral/Doctoral.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};

function App() {
  return (
    <>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/foo" exact component={Foo} />
        <Route path="/about" exact component={About} />
        <Route path="/admissions" exact component={Admissions} />
        <Route path="/people" exact component={People} />
        <Route path="/studentlife" exact component={StudentLife} />
        <Route path="/research" exact component={Research} />
        <Route path="/newsandevents" exact component={NewsAndEvents} />
        <Route path="/academics" exact component={Academics} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/bachelor" exact component={Bachelor} />
        <Route path="/master" exact component={Master} />
        <Route path="/doctoral" exact component={Doctoral} />
        {/* passing parameters via a route path */}
        <Route
          path="/bar/:categoryId/:productId"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Bar
              categoryId={match.params.categoryId}
              productId={match.params.productId}
            />
          )}
        />
        <Route
          path="/baz"
          exact
          render={() => <Baz content={externalContent} />}
        />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;