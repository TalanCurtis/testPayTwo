/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
global.PaymentRequest = require('react-native-payments').PaymentRequest;

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  handlePress(){
    console.warn('handle press')

    const METHOD_DATA = [{
      supportedMethods: ['android-pay'],
      data: {
        supportedNetworks: ['visa', 'mastercard', 'amex'],
        currencyCode: 'USD',
        environment: 'TEST', // defaults to production
        paymentMethodTokenizationParameters: {
          tokenizationType: 'NETWORK_TOKEN',
          parameters: {
            publicKey: 'your-pubic-key'
          }
        }
      }
    }];

    const DETAILS = {
      id: 'basic-example',
      displayItems: [
        {
          label: 'Movie Ticket',
          amount: { currency: 'USD', value: '15.00' }
        }
      ],
      total: {
        label: 'Merchant Name',
        amount: { currency: 'USD', value: '15.00' }
      }
    };

    const paymentRequest = new PaymentRequest(METHOD_DATA, DETAILS);

    paymentRequest.show().then(paymentResponse => paymentResponse.complete('success'));


  }

  render() {
    return (
      <View style={styles.container}>
        <Text>TestPay App Update</Text>
        <Button title='Pay' onPress={this.handlePress}><Text>PayMe</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
