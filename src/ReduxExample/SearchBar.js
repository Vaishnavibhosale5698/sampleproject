import React, {Component} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

const styles = require('./SearchBarStyles');

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchTerm: ''
        }
      }

  searchOnMedium = (searchParam) => {
      alert('pressed')
   // const API_KEY = 'AIzaSyAmNyvs8jevFpw-oVQAXU8pfDWrAPtXnuU';
   // const apiURL = 'https://cse.google.com/cse'
   //let URL = apiURL + '?key=' + API_KEY + '&cx=009756966931823328897:zuvfpkf0pkd' + '&q=' + this.state.searchTerm;
   let URL = 'https://cse.google.com/cse?cx=009756966931823328897:zuvfpkf0pkd'
   console.log(URL);
    fetch(URL, {
      method: 'GET',
      headers:{
       'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
        console.log('data',response)
      response.json().then((data) => {
        this.props.searchResults(data.items);
      })
    }).catch((error) => console.log(error));
  }

  render() {
    return(

      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder = 'Enter your search terms'
          style = {styles.textInputSearch}
          underlineColorAndroid={'transparent'}
          onChangeText={(searchTerm) => this.setState({ searchTerm })}
          value={this.state.searchTerm}
        />
        <TouchableOpacity
          style = {styles.textSearchButton}
          onPress={this.searchOnMedium}
        >
          {/* <FontAwesome name="search" size={16} color="#000" /> */}
        </TouchableOpacity>
      </View>
    )
  }
}