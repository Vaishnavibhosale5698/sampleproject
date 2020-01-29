import React, { useState } from "react";
import {View,Text,Button, TextInput} from 'react-native'
import ExampleHooks from './ExampleHooks'

export default function HooksWithManyStates(){
    const [age, setAge] = useState(30)
    const [fruit, setfruit] = useState('Grapes')
    const [todos, settodos] = useState({text :'DO Something'})

    return (
        <View>
               <Text>Increased Age: {fruit} </Text>
               <Button 
               title = 'Change Fruit Name'
               onPress= {() => setfruit('Apple')}/>
{/* 
               <Text>You Clicked {count} times</Text>
             <Button 
             title = 'Click me'
             onPress= {() => setCount(count +1)}/> */}

    {/* <Text>TO Do List:{todos}</Text>
    <TextInput 
     placeholder = 'Type Here'
     //value = 'Add Something'
     onChangeText = {(value) => {settodos([{value}])}}/> */}
        </View>
    )
}