import React from 'react';
import {View,Button} from 'react-native'
/* 
  Button Component
  @param {string} name
  @param {func} handleClick
  @returns button element
 */
const Buttoon = ({ name, handleClick }) => {
  return (
      <View>
          <Button 
          title = 'button'
          onPress = {handleClick}/>

      </View>
   // <input className="button" type="button" value={name} onClick={handleClick} />
  );
}

export default Buttoon;