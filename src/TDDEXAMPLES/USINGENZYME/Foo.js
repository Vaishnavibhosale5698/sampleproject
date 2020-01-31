import { Button,View, Text } from "react-native";
import React,{Component} from 'react'

export default class Foo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    render() {
      const { count } = this.state;
      return (
        <View>
          <View>
              <Text>
              {count} clicks
              </Text>  
          </View>

          <Button tile="url" onPress={() => { this.setState({ count: count + 1 }); }}>
            Increment
          </Button>
        </View>
      );
    }
  }