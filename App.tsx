import React from 'react';
import {View} from 'react-native';
import SubscriptionCard from './src/components/SubscriptionCard';

const App = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <SubscriptionCard />
    </View>
  );
};

export default App;
