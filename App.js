import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  NativeModules
} from 'react-native'
import { ReactDOM } from 'react';

<script src="http://localhost:8097"></script>

// import {NativeModules} from 'react-native';
const {CalendarModule} = NativeModules;
console.log(CalendarModule);

const App = props => {
  return (
    <SafeAreaView>

    <View style={StyleSheet.container}>
      <Text>Hello world</Text>
    </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})