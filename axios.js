class Search extends React.Component {
  state = {
    airportSearch: '',
    onCall: true,
    data: {}
  }

  searchAirport = () => {
    this.setState({ onCall: true });
    if (this.state.airportSearch
       === '') {
      return;
    }
    //need to set self to this in order to use it in the pormis (.then())
    const self = this;
    axios.get(`http://avwx.rest/api/metar/${this.state.airportSearch.toLowerCase()}?options=info`)
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
        //loader
      );
    }
      return (
        // data of response <SearchBody data={this.state.data} />
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
              //button press
              name="ios-search"
              onPress={this.searchAirport}
            />
            <Input
              value={this.state.airportSearch
              }
              placeholder="Search"
              onChangeText={(airportSearch
              ) => this.setState({ airportSearch
               })}
            />
          </Item>
        </Header>
        {this.renderBody()}
      </View>
    );
  }
}

export default Search;
