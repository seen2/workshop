import React from 'react';
import { StyleSheet, View,Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
					<Image 
						source={require('./assets/Moab.jpeg')}
						style={{flex:1,height:60,width:150}}
					/>
					<Image 
						source={require('./assets/Moab.jpeg')}
						style={{flex:1,height:60,width:150}}
					/>
					<Image 
						source={require('./assets/Moab.jpeg')}
						style={{flex:1,height:60,width:150}}
					/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
	box: {
		//flexGrow:0,
		//flexShrink:1,
		//flexBasis:100,//changes within ups and downs
		flex: 1,
		width:200,
		borderWidth:3,
		borderRadius:3,
		borderColor:'grey',
    backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
