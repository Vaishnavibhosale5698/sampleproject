// import React, { Component } from 'react'
// import {View,Text,TouchableOpacity,Linking} from 'react-native'

// class componentName extends Component {
//   open = () =>{
//     //alert('hello')
//     //Linking.openURL('')
//     var msg = 'hello'
//     var no = 7028197903
//     Linking.openURL(`whatsapp://send?text = '${msg}' + &phone=91 '${no}'`)
//   }
//   render() {
//     return (
//       <View style={{alignItems : 'center',borderColor : 'black',height : '20%',width :'30%'}}>   
//         <TouchableOpacity onPress={this.open}>
//         <Text>Open Gmail App</Text>
//         </TouchableOpacity>

//       </View>
//     )
//   }
// }

// export default componentName


//This is an Example to Send WhatsApp Message from React Native App
// import React, { Component } from 'react';
// import { View, StyleSheet, Text, Linking, TextInput, Button } from 'react-native';
// //import SendSMS from '../sampleproject/src/SendSMS'

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mobile_no: '',
//       msg: '',
//     };
//   }
//   sendOnWhatsApp=() => {
//     let msg = this.state.msg;
//     let mobile = this.state.mobile_no;
//     if(mobile){
//       if(msg){
//         let url = 'whatsapp://send?text=' + this.state.msg + '&phone=91' + this.state.mobile_no;
//         Linking.openURL(url).then((data) => {
//           console.log('WhatsApp Opened');
//         }).catch(() => {
//           alert('Make sure Whatsapp installed on your device');
//         });
//       }else{
//         alert('Please insert message to send');
//       }
//     }else{
//       alert('Please insert mobile no');
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={{textAlign: 'center', fontSize: 20, paddingVertical: 30}}>
//           Example to Send WhatsApp Message from React Native App
//         </Text>
//         <TextInput
//           value={this.state.mobile_no}
//           onChangeText={mobile_no => this.setState({ mobile_no })}
//           placeholder={'Enter Mobile'}
//           style={styles.input}
//           keyboardType={'numeric'}
//         />
//         <TextInput
//           value={this.state.msg}
//           onChangeText={msg => this.setState({ msg })}
//           placeholder={'Enter message'}
//           style={styles.input}
//         />
//         <View style={{marginTop:20}}>
//           <Button
//             onPress={this.sendOnWhatsApp}
//             title= 'Send WhatsApp Message'
//             />
//         </View>
//         {/* <SendSMS/> */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop:50,
//     padding: 30,
//     backgroundColor: '#ffffff',
//   },
//  input: {
//    width:250,
//    height: 44,
//    padding: 10,
//    margin: 20,
//    backgroundColor: '#D3D3D3',
//  },
// });



/*This is an Example of Sending Text SMS in React Native*/
// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import SendSMS from 'react-native-sms'

// export default class App extends React.Component {
//   someFunction() {
//     SendSMS.send({
//         //Message body
//         body: 'Hiiiiiiiiiiiiiiiii',
//         //Recipients Number
//         recipients: ['7767886141'],
//         //An array of types that would trigger a "completed" response when using android
//         successTypes: ['sent', 'queued']
//     }, (completed, cancelled, error) => {
//         if(completed){
//           console.log('SMS Sent Completed');
//         }else if(cancelled){
//           console.log('SMS Sent Cancelled');
//         }else if(error){
//           console.log('Some error occured');
//         }
//     });
//   }
//   render() {
//     return (
//       <View style={styles.MainContainer}>
//         <TouchableOpacity onPress={this.someFunction.bind(this)}>
//         <View>
//           <Image
//             //We are showing the Image from online
//             source={{
//               uri:
//                 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sms.png',
//             }}
//             //You can also show the image from you project directory like below
//             //source={require('./Images/sms.png')}
//             style={styles.ImageStyle}
//           />
//           <Text style={styles.text}>Send SMS</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     borderWidth: 1,
//     borderColor: '#000',
//   },
//   text: {
//     color: 'black',
//     textAlign:'center',
//     fontSize: 25,
//     marginTop:16,
//   },
//   ImageStyle: {
//     height: 150,
//     width: 150,
//     resizeMode: 'stretch',
//   },
// });



// import React, { Component } from 'react'
// import { View, Alert, Button } from 'react-native'
// import Mailer from 'react-native-mail'

// export default class App extends Component {

//   handleEmail = () => {
//     Mailer.mail({
//       subject: 'need help',
//       recipients: ['support@example.com'],
//       ccRecipients: ['supportCC@example.com'],
//       bccRecipients: ['supportBCC@example.com'],
//       body: '<b>A Bold Body</b>',
//       isHTML: true,
//       attachment: {
//         path: '',  // The absolute path of the file from which to read data.
//         type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
//         name: '',   // Optional: Custom filename for attachment
//       }
//     }, (error, event) => {
//       Alert.alert(
//         error,
//         event,
//         [
//           {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
//           {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
//         ],
//         { cancelable: true }
//       )
//     });
//   }

//   render() {
//     return (
//       <View style={{height:'100%',width :'100%'}}>
//         <Button
//           onPress={this.handleEmail}
//           title="Email Me"
//           color="#841584"
//           accessabilityLabel="Purple Email Me Button"
//         />
//       </View>
//     );
//   }
// }



// import React, { Component } from 'react'
// import {View, Button} from 'react-native'
// import { openInbox } from 'react-native-email-link'

// export default class componentName extends Component {

//   openEmail = () =>{
//     openInbox()
//   }
//   render() {
//     return (
//       <View style={{height:'100%',width:'100%'}}>
//         <Button
//         onPress={this.openEmail}
//         title = 'Email Me'/>
//       </View>
//     )
//   }
// }

// import React, { Component } from 'react'
// import { View, Button } from 'react-native'
// import * as Keychain from 'react-native-keychain'

// export default class App extends Component {
//   storeInKeychain = () => {
//     const username = 'Vaishnavi';
//     const password = 'Bridgelabz123';

//     Keychain
//       .setGenericPassword(username, password)
//       .then(function () {
//         console.log('Credentials saved successfully!');
//       });
//   }

//   retrieveFromKeychain = async () => {
//     try {
//       // Retreive the credentials
//       const credentials = await Keychain.getGenericPassword();
//       if (credentials) {
//         console.log('Credentials(USERNAME) successfully loaded :' + credentials.username);
//         console.log('Credentials(PASSWORD) successfully loaded :' + credentials.password);
//       } else {
//         console.log('No credentials stored')
//       }
//     } catch (error) {
//       console.log('Keychain couldn\'t be accessed!', error);
//     }
//   }

//   render() {
//     return (
//       <View style = {{marginVertical: 30}}>
//         <View>
//           <Button onPress={this.storeInKeychain}
//             title='Store In Keychain' />
//         </View>

//         <View style={{marginTop:30}}>
//           <Button onPress={this.retrieveFromKeychain}
//             title='Retrieve From Keychain' />
//         </View>

//       </View>

//     )
//   }
// }

// import React, { Component } from 'react'
// import {View} from 'react-native'
// import Button from './src/TDDEXAMPLES/USINGENZYME/Button'
// import HooksWithManyStates from './src/HooksEXAMPLE/HooksWithManyStates'
// import TODOApp from './src/HooksEXAMPLE/TODOApp'
// import WriteFile from './src/FileSystemExamples/WriteFile'
// import Button1 from './src/TDDEXAMPLES/USINGENZYME/Button1'

// class App extends Component {
//   render() {
//     return (
//       // <View>
//       //   {/* <Button/> */}
//       //   <HooksWithManyStates/>
//       // </View>
//       //<TODOApp/>
//       //<WriteFile/>
//       <Button1/>
//     )
//   }
// }

// export default App

// import React, { Component } from 'react'
// import {View} from 'react-native'
// import TextFeildTesting from './src/TDDEXAMPLES/USINGENZYME/TextFeildTesting'

// class App extends Component {
//   render() {
//     return (
//       <View>
//         <TextFeildTesting/>
//       </View>
//     )
//   }
// }

// export default App


// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import SearchBar from './src/ReduxExample/SearchBar';
// import SearchResults from './src/ReduxExample/SearchResults';

// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import rootReducer from './src/ReduxExample/reducers_index';

// const store = createStore(rootReducer);
// store.subscribe(() => console.log('store', store.getState()));

// export default class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <View style={styles.container}>
//           <SearchBar/>
//           <SearchResults/>
//         </View>
//       </Provider>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React, { Component } from 'react';
// import {View, Text, TextInput, Button} from 'react-native'
// // import { Provider} from 'react-redux';
// import { connect } from 'react-redux';
// // import configureStore from './src/store/configureStore';
// import * as contactAction from './src/actions/contactAction';

// // const store = configureStore();

// class App extends Component {

//   constructor(props){
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.state = {
//       name: ''
//     }
//   }

//   handleChange(e){
//     this.setState({
//       name: e
//     })
//   }

//   handleSubmit(e){
//     e.preventDefault();
//     let contact = {
//       name: this.state.name
//     }
//     this.props.createContact(contact);
//   }

//   render() {
//     let name;
//     return(
//       // <Provider store={store}>
//       <View>
//         <Text>Clientside Contacts Application</Text>
//         { 
//         <View>
//           {this.props.contacts.map((contact, i) => <li key={i}>{contact.name}</li> )}
//         </View> 
//         }
//         <View>
//           <Text>Add Contact Form</Text>
//           <View>
//             <TextInput 
//             //type="text" 
//             onChangeText={(e) => this.handleChange(e)} />
//             <Button 
//             title="submit" 
//             onPress = {(e) => this.handleSubmit(e)}/>
//           </View>
//         </View>
//       </View>
//       // </Provider>
//     )
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   return {
//     contacts: state.contacts
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createContact: contact => dispatch(contactAction.createContact(contact))
//   }
// };

// //export default connect(App)(mapStateToProps, mapDispatchToProps);

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// import React, { Component } from 'react'
// import { Provider } from 'react-redux';
// import configureStore from './src/store/configureStore';
// import ContactList from './src/ContactList';

// const store = configureStore();

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//          <ContactList/>
//       </Provider>
//     )
//   }
// }

// export default App

import React, { Component } from 'react'
import { View, Button } from 'react-native'
import ToastExample from '../sampleproject/src/ToastExample';

class App extends Component {

  showToast = () =>{
    ToastExample.show('Awesome', ToastExample.SHORT);
  }
  render() {
    return (
      <View>
        <Button
        title = 'Toast Message'
        onPress = {this.showToast}/>
      </View>
    )
  }
}

export default App

