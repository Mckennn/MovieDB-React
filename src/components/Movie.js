// import React from 'react';

// import {
//     StyleSheet,
//     View,
//     Platform,
//     ImageBackground,
//     useWindowDimensions
// } from "react-native";

// const Movie = ({ info }) => {

//     const windowSize = useWindowDimensions();

//     console.log(info);

//     const isPortrait = windowSize.height > windowSize.width;
//     const getWidth = () => {
//         let percent = isPortrait ? 50 : 33; // : veut dire sinon
//         if (Platform.IOS === 'ios' && !isPortrait) {
//             percent -= 3.3;
//         }
//         return windowSize.width * (percent / 100)
//     }

//     //  https://image.tmdb.org/t/p/w300/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg

//     return (

//         <View style={
//             {
//                 ...styles.movie,
//                 width: getWidth() - 20
//             }
//         }
//         >
//             <ImageBackground
//                 style={styles.img}
//                 source={{
//                     uri: 'https://image.tmdb.org/t/p/w300/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg'
//                 }}>
//             </ImageBackground>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     movie: {
//         height: 300,
//         backgroundColor: '#b71540',
//         margin: 10
//     },
//     img: {
//         width: '100%',
//         height: '100%'
//     }
// });
// export default Movie;

import React from "react";
import {
    StyleSheet,
    useWindowDimensions,
    View,
    Platform,
    ImageBackground,
    Text,
    Pressable
} from "react-native";
import {useNavigation} from '@react-navigation/native';

const Movie = ({ info }) => {

    const navigation = useNavigation();

    const windowSize = useWindowDimensions();

    const isPortrait = windowSize.height > windowSize.width;

    const getWidth = () => {
        let percent = isPortrait ? 50 : 33;
        if (Platform.OS === 'ios' && !isPortrait) {
            percent -= 3.3;
        }
        return windowSize.width * (percent / 100)
    }
    // https://image.tmdb.org/t/p/w300/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg
    return (
        <Pressable onPress={() => navigation.navigate('Movie', {details: info})}>
            <View style={
                {
                    ...styles.movie,
                    width: getWidth() - 20
                }
            }
            >
                <ImageBackground
                    style={styles.img}
                    source={{
                        uri: 'https://image.tmdb.org/t/p/w300' + info.poster_path
                    }}
                >
                    <View style={styles.divTitle}>
                        <Text style={styles.title}>{info.title}</Text>
                    </View>
                </ImageBackground>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    movie: {
        height: 300,
        backgroundColor: '#b71540',
        margin: 10
    },
    img: {
        width: '100%',
        height: '100%'
    },
    divTitle: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
        padding: 5,
        textAlign: 'center'
    }
});
export default Movie;