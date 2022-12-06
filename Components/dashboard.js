import React from 'react';
import { Text, StyleSheet } from 'react-native';

const App = ({route}) => {
  return (
    <Text>
        {route.params.paramKey}
    </Text>
  );
};

export default App;