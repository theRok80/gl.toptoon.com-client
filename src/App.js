import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Locale from "./i18n";

import MainContainer from "./containers/main";

const App = () => {
  return (
      <Locale>
        <Switch>
          <Route path="/:locale/" exact={true} component={MainContainer}/>
          <Route component={MainContainer}/>
        </Switch>
      </Locale>
  )
};

export default App;
