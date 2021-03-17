// import React from 'react';
// import {StatusBar} from 'expo-status-bar';
// import {
//     StyleSheet,
//     Text,
//     View,
//     SafeAreaView,
//     Platform,
//     ScrollView,
//     useState,
//     useEffect,
//     FlatList
// } from 'react-native';
// import Movie from "./src/components/Movie";

// export default function App() {

//     const [movies, setMovies] = useState ([])

//     useEffect(() => {
//         fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=8e45f6ec2c281d81b0594cba9e93629f&language=en-US&page=1')
//         .then(response => response.json())
//         .then(responseJson => {
//             setMovies(responseJson);
//         })
//     }, []);


//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.view}>
//                 <Text style={styles.header}>
//                     Movies
//                 </Text>
//                 <FlatList
//                     contentContainer={styles.section}
//                     data={movies}
//                     renderItem={ item => <Movie /> }
//                     keyExtractor={item => item.id}

//                 />
//                 {/* <ScrollView contentContainerStyle={styles.section}>
//                     <Movie />
//                     <Movie />
//                     <Movie />
//                 </ScrollView> */}
//             </View>
//         </SafeAreaView>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     view: {
//         paddingTop: Platform.OS === 'ios' ? 0 : 40,
//         flex: 1
//     },
//     header: {
//         fontSize: 40,
//         fontWeight: 900,
//         textAlign: 'center'
//     },
//     section: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         flexWrap: 'wrap'
//     },
//     movie: {
//         height: 300,
//         backgroundColor: '#b71540',
//         margin: 10
//     }
// });

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/components/Home";
import DetailsMovie from './src/components/DetailsMovie';

const Stack = createStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options= {{
                        title: 'Movies',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 35,
                            textAlign: 'center'
                        },
                    }}
                />
                <Stack.Screen
                    name="Movie"
                    component={DetailsMovie}
                    options= {{
                        title: 'Movie',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 35,
                            textAlign: 'center'
                        },
                    }}
                />
                {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}