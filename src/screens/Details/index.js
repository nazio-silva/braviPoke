import React from "react"
import { View, Text, Image } from "react-native";
import Info from "../../components/Info";

const DetailsScreen = ({ route }) => {

  const {pokemon, imageUrl, pokeID} = route.params

  return (
    <View
      style={{
        margin: 8,
        borderWidth: 0.9,
        borderColor: "#303030",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Image resizeMode="contain" source={{uri: imageUrl}} style={{height: 200, width: 200}} />
      
      <View style={{ width: "100%", padding: 10 }}>
        <Info pokemon={pokemon} pokeID={pokeID} showAbilities={true} />
      </View>
    </View>
  )
}

export default DetailsScreen;