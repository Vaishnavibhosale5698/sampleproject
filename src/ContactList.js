import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';
import Icon from 'react-native-vector-icons/Feather';

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: ''
        }
    }

    handleChange(e) {
        this.setState({
            name: e
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let contact = {
            name: this.state.name
        }
        this.props.createContact(contact);

        this.setState({
            name: ''
        })
    }

    listView(data, index) {
        return (
            <View style = {{height  :'auto'}}>
                      <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{top: 6,width :'90%'}}>
                        <Text key={index}>
                            {data.name}
                        </Text>
                    </View>
                    <View style={{ left: '2%',width :'10%'}}>
                        {/* <Button 
                            title= 'Remove'
                             onPress={(e) => this.deleteContact(e, index)} />  */}
                        <Icon
                            name="trash-2"
                            size={30}
                            color="darkblue"
                            style={{ marginLeft: 'auto', justifyContent : 'flex-end', }}
                            onPress={(e) => this.deleteContact(e, index)}
                        />
                    </View>
                </View>
                <View style={{ borderWidth: 1 }}></View>
            </View>
        )
    }

    deleteContact(e, index) {
        e.preventDefault();
        this.props.deleteContact(index);
    }

    render() {
        let name;
        return (
            // <Provider store={store}>
            <View>
                <Text style={{ fontSize: 20, left: '7%' }}>Clientside Contacts Application</Text>
                {/* { 
        <View>
            <Text style = {{fontSize : 16,top :5,left :5}}>Contact List....</Text>
          {this.props.contacts.map((contact, i) => <Text key={i}>{contact.name}</Text> )}
        </View> 
        } */}
                <View style={{ height: '30%', width: '100%'}}>
                    <Text style={{ fontSize: 20, color: 'blue', left: '25%' }}>Add Contact Form</Text>
                    <View style={{ backgroundColor: 'lightgray' }}>
                        <TextInput
                            placeholder='Type Name and Contact Here...'
                            value={this.state.name}
                            onChangeText={(e) => this.handleChange(e)} />
                        <Button
                            title="submit"
                            onPress={(e) => this.handleSubmit(e)} />
                    </View>
                    {<View>
                        <Text style ={{fontSize : 20,fontWeight : 'bold',textAlign : 'center'}}>Contact List</Text>
                        {this.props.contacts.map((contact, i) => this.listView(contact, i))}
                    </View>}
                </View>
            </View>
            // </Provider>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contacts: state.contacts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createContact: contact => dispatch(contactAction.createContact(contact)),
        deleteContact: index => dispatch(contactAction.deleteContact(index))

    }
};

//export default connect(App)(mapStateToProps, mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);