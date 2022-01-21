import {
    StyleSheet,
    View,
    Text,
    Pressable
  } from 'react-native';
  import { createStackNavigator } from '@react-navigation/stack';
  
  const Stack = createStackNavigator();
  
  const Home = ({navigation, route}) => {

    const { message } = route.params;
  
    const onPressHandler = () => {
      navigation.navigate('Explorer', {message: 'Message comming from home'});
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Pressable style={styles.buttonNavigation} onPress={onPressHandler}>
          <Text>Go Explorer</Text>
        </Pressable>
        <Text>{message}</Text>
      </View>
    )
  }
  
  const Explorer = ({navigation, route}) => {

    const { message } = route.params;
  
    const onPressHandler = () => {
      navigation.navigate('Home', {message: 'This is the return of explorer!'});
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Explorer</Text>
        <Pressable style={styles.buttonNavigation} onPress={onPressHandler}>
          <Text>Go Home</Text>
        </Pressable>
        <Text>{message}</Text>
      </View>
    )
  }
  
  export default function Start() {
    return (
        <Stack.Navigator
          initialRouteName='Home'>
          <Stack.Screen
            name='Home'
            component={Home}
            initialParams={{message: 'Initial message from home'}}/>
          <Stack.Screen
            name='Explorer'
            component={Explorer}/>
        </Stack.Navigator>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24
      //backgroundColor: 'red'
    },
    buttonNavigation: {
      marginTop: 10,
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      borderRadius: 5
    }
  });
  