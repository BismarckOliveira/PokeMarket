import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Firepage from '../pages/firePage';
import ThunderPage from '../pages/thunderPage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Firepage} />
      <Route path="/thunder" component={ThunderPage} />
    </Switch>
  );
};

export default Routes;
