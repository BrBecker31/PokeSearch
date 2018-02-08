import React from 'react';
import { View, Platform } from 'react-native';
import Landing from './src/Components/Landing';
import Search from './src/Components/Search';


export default class App extends React.Component {
  state = {
    currentScreen: 'landing'
  }

  switchScreen = (currentScreen) => {
    this.setState({ currentScreen });
  }

  renderScreen = () => {
    if (this.state.currentScreen === 'landing') {
      return <Landing switchScreen={this.switchScreen} />;
    } else if (this.state.currentScreen === 'search') {
      return <Search />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: Platform.OS === 'android' ? 24 : 0 }}>
        {this.renderScreen()}
      </View>
    );
  }
}
