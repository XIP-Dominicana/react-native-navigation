import {
    StyleSheet,
    View,
    Text,
    Pressable
  } from 'react-native';
  
const Settings = ({navigation}) => {
  
    const onPressHandler = () => {
      navigation.navigate('Chats');
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <Pressable style={styles.buttonNavigation} onPress={onPressHandler}>
          <Text>Go Chats</Text>
        </Pressable>
      </View>
    )
  
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
  

  export default Settings;