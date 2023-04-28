import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import CartaoFilme from './src/components/Cartao';

export default function App() { 

  let [ filmes, setFilmes ] = useState([]);

  useEffect(function(){
    fetch('https://api.otaviolube.com/api/filmes?populate=*').then( resultado => resultado.json()
     ).then( objeto => {setFilmes(objeto.data); console.log(objeto)})
  }, [])


  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      {filmes.length > 0 ?
      filmes.map(filme =><CartaoFilme key={filme.id} filme={filme.attributes} />) 

      : <ActivityIndicator size={'large'} />}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});
