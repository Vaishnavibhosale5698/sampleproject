import React, { Component } from 'react'
import { TextInput, Button, View ,Text} from 'react-native'

class TextFeildTesting extends Component {
    constructor(){
        super();
        this.state = {
            email : 'abc@abc.com'
        }
    }
    handleTextEmail = (e) =>{
        //alert('hellooo')
        this.setState({
            email : e
        })
       // alert(this.state.email)
    }
  render() {
    return (
      <View>
          <Text>Registration</Text>
        <TextInput
        testID = 'text'
        placeholder = 'Type Here'
        onChangeText = {(e) => this.handleTextEmail(e)}/>

        <Button testID = 'button'
        title = 'Button'
        />
      </View>
    )
  }
}

export default TextFeildTesting
