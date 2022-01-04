import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import api from '../../api';
import List from '../../components/List';

const HomeScreen = ({ navigation }) => {

  const [ pokers, setPokers ] = useState([])

  useEffect(() => {
    getAll()
  },[])
  
  const getAll = async () => {
    const response = await api.get()

    const data = response.data
    const { results } = data

    setPokers(results)
  }
  
  return (
    <SafeAreaView>
      <Text style={{  margin: 10, fontSize: 18, fontWeight: '600', color: "#303030" }}>List Pokemon</Text>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <List data={pokers} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
