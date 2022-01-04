import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import api from "../../api"

const Info = ({ pokemon, pokeID, showAbilities }) => {

  const [ listTypes, setListTypes ] = useState(null)
  const [ listAbilities, setListAbilities ] = useState(null)

  const getById = async () => {
    const response = await api.get(`${pokeID}`)
    
    let types = response.data.types
    let abilities = response.data.abilities
    
    setListTypes(types)
    setListAbilities(abilities)

  }

  useEffect(() => {
    getById()
  },[])

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontWeight: "600", color: "#303030"}}>Informações básicas</Text> 
      <Text style={{ fontWeight: "600", color: "#303030"}}>
        Nome: <Text style={{ fontWeight: "600", color: "#909090"}}> {pokemon.name} </Text>
      </Text>

      <Text style={{ fontWeight: "600", color: "#303030" }}>
        Tipo: 
        <View style={{ flex: 1, alignItems: "center", flexDirection: "row", }}>
          {
            listTypes !== null ? listTypes.map((poke, key) => {
              return (
                <View key={key} style={{ flex: 1, alignItems: "center", flexDirection: "row", marginLeft: 10 }}>
                  <View style={{ height: 10, width: 10, borderRadius: 50, backgroundColor: "#909090", }} />
                  <Text style={{ fontWeight: "600", color: "#909090",  }}> {poke.type.name} </Text>
                </View>
              )
            })
            :
            <View />
          } 
        </View>
      </Text>

      {
        showAbilities && <View>
          <Text style={{ fontWeight: "600", color: "#303030" }}>
            Habilidades: 
            <View style={{ flex: 1, alignItems: "center", flexDirection: "row", }}>
              {
                listAbilities !== null ? listAbilities.map((poke, key) => {
                  return (
                    <View style={{ flex: 1, alignItems: "center", flexDirection: "row", marginLeft: 10 }}>
                      <View style={{ height: 10, width: 10, borderRadius: 50, backgroundColor: "#909090", }} />
                      <Text style={{ fontWeight: "600", color: "#909090",  }}> {poke.ability.name} </Text>
                    </View>
                  )
                })
                :
                <View />
              } 
            </View>
          </Text>
        </View>
      }

    </View>
  )
}

export default Info