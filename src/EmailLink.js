import React, { Component } from 'react'
import {View, Button} from 'react-native'
import { openInbox } from 'react-native-email-link'

export default class componentName extends Component {
  
  openEmail = () =>{
    openInbox()
  }
  render() {
    return (
      <View style={{height:'100%',width:'100%'}}>
        <Button
        onPress={this.openEmail}
        title = 'Email Me'/>
      </View>
    )
  }
}
 