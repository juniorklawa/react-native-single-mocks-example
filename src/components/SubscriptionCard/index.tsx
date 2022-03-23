import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {auth} from '../../services/api';

const SubscriptionCard = () => {
  const isSubscriptionActive = auth().user.isSubscriptionActive;
  return (
    <View style={styles.container}>
      <Text testID="subscription-card-label" style={styles.text}>
        {isSubscriptionActive ? 'Active' : 'Not Active'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1565C0',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
  },
});

export default SubscriptionCard;
