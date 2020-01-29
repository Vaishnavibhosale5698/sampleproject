import React, { Component } from 'react'
import { Button , View} from 'react-native'
import * as RNFS from 'react-native-fs'

class WriteFile extends Component {
  
    writeToFile = () =>{
    //  const contents = 'WelCome To Newly Created File'
    //  const savePath = '/Users/bridgelabz'
    //  RNFS.readFile('/sdcard/Resume').then(res =>{
    //      console.log('File Written to Destination SuccessFully....',res)
    //  })
    //  .catch(err =>{
    //     console.log(err.message,err.code)
    //  })
    const fs = RNFetchBlob.fs
    const base64 = RNFetchBlob.base64
    fs.createFile(NEW_FILE_PATH, 'foo', 'utf8')
    fs.createFile(NEW_FILE_PATH, [102, 111, 111], 'ascii')
    fs.createFile(NEW_FILE_PATH, base64.encode('foo'), 'base64')
    fs.createFile(PATH_TO_WRITE, PATH_TO_ANOTHER_FILE, 'uri')
    }

  render() {
    return (
      <View>
        <Button
        title = 'Write To File'
        onPress = {this.writeToFile}/>
      </View>
    )
  }
}

export default WriteFile
