import React from 'react';
import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {ContactListNav} from './route/Route';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ContactListNav />
    </NavigationContainer>
  );
}

export default App;
