import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    FlatList,
    useWindowDimensions
} from 'react-native';
import Movie from "./Movie";



export default function Home() {
    const windowSize = useWindowDimensions();

    const [columnCount, setColumnCount] = useState(isPortrait ? 2 : 3);

    const isPortrait = windowSize.height > windowSize.width;

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=8e45f6ec2c281d81b0594cba9e93629f&language=en-US&page=1')
            .then(response => response.json())
            .then(responseJson => {
                setMovies(responseJson.results);
            })
    }, []);

    useEffect(() => {
        setColumnCount(isPortrait ? 2 : 3)
    }, [isPortrait])

    return (
        
            <SafeAreaView style={styles.container}>
                <View style={styles.view}>
                    <FlatList
                        numColumns={columnCount}
                        key={columnCount}
                        horizontal={false}
                        contentContainerStyle={styles.section}
                        data={movies}
                        renderItem={({ item }) => <Movie info={item} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#1e272e',
        // color: '#d2dae2',
    },
    view: {
        paddingTop: Platform.OS === 'ios' ? 0 : 40,
        flex: 1
    },

});