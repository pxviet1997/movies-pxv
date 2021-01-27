import React from 'react';
import { StyleSheet, View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
// import { Button } from 'react-native-element'

import Movie from '../components/Movie';
import useResults from '../hooks/useResults';

const MainScreen = ({ navigation }) => {
  const [fetchApi, results, errorMessage] = useResults();

  // console.log(results);

  return (
    <View style={styles.container}>
      <FlatList
        data={results.results}
        keyExtractor={(result) => result.id.toString()}
        renderItem={({ item }) => {
          console.log(item)
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detail', { movie: item })
              }
            >
              <Movie movie={item} />
            </TouchableOpacity>

          );
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
        <Button
          title="Previous"
          onPress={() => fetchApi(results.page - 1)}
        />
        <Button
          title="Next"
          onPress={() => fetchApi(results.page + 1)}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1
  }
});

export default MainScreen;