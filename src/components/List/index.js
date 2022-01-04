import React from "react"
import { Image, TouchableOpacity } from "react-native"
import Info from "../Info";

const List = ({ navigation, data }) => {

  const details = (pokemon, imageUrl, pokeID) => {
    const params = { pokemon, imageUrl, pokeID }

    navigation.navigate('Details', params)
  }

  return (  
    data.map((pokemon, key) => {

      const pokeID = pokemon.url.split('/')[6];

      const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeID}.png?raw=true`;

      return (
        <TouchableOpacity
          key={key}
          style={{
            flex: 1,
            margin: 8,
            borderWidth: 0.9,
            borderColor: "#303030",
            borderRadius: 8,
            flexDirection: "row"
          }}
          onPress={() => details(pokemon, imageUrl, pokeID)}
        >
          <Image resizeMode="contain" source={{uri: imageUrl}} style={{height: 100, width: 100}}/>
          
          <Info pokemon={pokemon} pokeID={pokeID} showAbilities={false} />
        </TouchableOpacity>
      )
    })
  )
}

export default List