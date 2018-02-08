import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'native-base';

const myBackground = require('../../assets/landing.jpg');

class Landing extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Image
            source={myBackground}
            style={styles.backgroundImage}
          />
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
            <Button
              block primary
              style={styles.buttonStyles}
              onPress={() => this.props.switchScreen('search')}
            >
              <Text style={styles.buttonText}>Start Searching</Text>
            </Button>
          </View>
        </View>
      );
    }
}

const styles = {
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 30,
    color: 'blue',
    alignItems: 'center'
  },
  buttonStyles: {
    margin: 10
  },
  buttonText: {
    color: 'white'
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute'
  }
};

export default Landing;
