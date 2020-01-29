import * as RNFS from 'react-native-fs'
import React, { Component } from 'react'
import {View,Text, Button} from 'react-native'

class ReadFolder extends Component {
ReadDirectory = () =>{
    RNFS.readDir(RNFS.DocumentDirectoryPath).then(files =>{
        console.log('Directory contents',files)
    })
    
    .catch(err =>{
        console.log(err.message,err.code)
    })
}  
  render() {
    return (
      <View>
        <Button
        title = 'Read Folder'
        onPress = {this.ReadDirectory}/>
      </View>
    )
  }
}

export default ReadFolder

