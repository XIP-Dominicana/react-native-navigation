import {
    StyleSheet,
    View,
    Text,
    Pressable
  } from 'react-native';


  const Chats = ({navigation}) => {
  
    const onPressHandler = () => {
      navigation.navigate('Settings');
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Chats</Text>
        <Pressable style={styles.buttonNavigation} onPress={onPressHandler}>
          <Text>Go Settings</Text>
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
  

export default Chats;