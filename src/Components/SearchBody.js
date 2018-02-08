import React from 'react';
import { ScrollView, Text, View, Image, Dimensions } from 'react-native';
import { ListItem, List } from 'native-base';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class SearchBody extends React.Component {
  render() {
    const pokemon = this.props.data;
    console.log('receiving poke results:');
    console.log(pokemon);
    if (!pokemon) {
      return <View />;
    }
    return (

      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
        <View style={styles.viewStyles}>
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            style={styles.img}
          />
        </View>
        <View style={styles.info}>
          <ListItem itemDivider>
            <Text style={{ fontWeight: 'bold' }}>Size</Text>
          </ListItem>
          <ListItem>
            <Text>Weight - {pokemon.weight}kg</Text>
          </ListItem>
          <ListItem >
            <Text>Size - {pokemon.height / 10 }m</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text style={{ fontWeight: 'bold' }}>Abilities</Text>
          </ListItem>
          <List
            dataArray={pokemon.abilities}
            renderRow={(item) =>
              <ListItem>
                <Text>{item.ability.name}</Text>
              </ListItem>
            }
          />
        </View>
        <Image
          style={styles.backgroundImage}
          source={{ uri: 'http://pokemongolive.com/img/posts/raids_loading.png' }}
        />
      </ScrollView>
    );
  }
}

const styles = {
  header: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center'
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  img: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  info: {
    flex: 1,
    backgroundColor: 'white',
    opacity: 0.8
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    // resizeMode: 'cover',
    // height: height,
    // width: width
  }
};

export default SearchBody;
