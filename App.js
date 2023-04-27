import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import CartaoFilme from './src/components/Cartao';

export default function App() { 

  let [ filmes, setFilmes ] = useState([]);

  useEffect(function(){
    fetch('https://api.otaviolube.com/api/filmes').then( resultado => console.log("aq") )
  }, [])

  return (
    
    <ScrollView style={styles.container}>
      {filmes.lenght > 0 ?
      filmes.map(filme =><CartaoFilme key={filme.id}
      filme={filme.attributes} />) 

      : <ActivityIndicator size={'large'} />}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
