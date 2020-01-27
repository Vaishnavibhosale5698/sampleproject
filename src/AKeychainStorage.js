import React, { Component } from 'react'
import { View, Button } from 'react-native'
import * as Keychain from 'react-native-keychain'

export default class App extends Component {
  storeInKeychain = () => {
    const username = 'Vaishnavi';
    const password = 'Bridgelabz123';

    Keychain
      .setGenericPassword(username, password)
      .then(function () {
        console.log('Credentials saved successfully!');
      });
  }

  retrieveFromKeychain = async () => {
    try {
      // Retreive the credentials
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        console.log('Credentials(USERNAME) successfully loaded :' + credentials.username);
        console.log('Credentials(PASSWORD) successfully loaded :' + credentials.password);
      } else {
        console.log('No credentials stored')
      }
    } catch (error) {
      console.log('Keychain couldn\'t be accessed!', error);
    }
  }

  render() {
    return (
      <View style = {{marginVertical: 30}}>
        <View>
          <Button onPress={this.storeInKeychain}
            title='Store In Keychain' />
        </View>

        <View style={{marginTop:30}}>
          <Button onPress={this.retrieveFromKeychain}
            title='Retrieve From Keychain' />
        </View>

      </View>

    )
  }
}
