import React from 'react';
import { View } from 'react-native';
import { Header, Item, Icon, Input } from 'native-base';
import axios from 'axios';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';

class Search extends React.Component {
  state = {
    pokeSearch: '',
    onCall: true,
    data: {}
  }

  searchPoke = () => {
    this.setState({ onCall: true });
    if (this.state.pokeSearch === '') {
      return;
    }
    //need to set self to this in order to use it in the pormis (.then())
    const self = this;
    axios.get('http://pokeapi.co/api/v2/pokemon/'+this.state.pokeSearch.toLowerCase())
    .then((response) => {
      console.log(response);
      self.setState({ data: response.data });
      self.setState({ onCall: false });
    })
    .catch((error) => {
      console.log(error);
      self.setState({ data: undefined });
      self.setState({ onCall: false });
    });
  }

  renderBody = () => {
    if (this.state.onCall) {
      return (
        <PokeLoader />
      );
    }
      return (
        <SearchBody data={this.state.data} />
      );
    }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          searchBar
          rounded
        >
          <Item>
            <Icon
              name="ios-search"
              onPress={this.searchPoke}
            />
            <Input
              value={this.state.pokeSearch}
              placeholder="Search"
              onChangeText={(pokeSearch) => this.setState({ pokeSearch })}
            />
          </Item>
        </Header>
        {this.renderBody()}
      </View>
    );
  }
}

export default Search;
