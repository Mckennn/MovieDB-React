import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const DetailsMovie = ({ route }) => {

    const { details } = route.params;

    return (
        <View>
            <Text style={styles.title}>{details.title}</Text>
            <View style={styles.article}>
                <Image style={styles.img}
                    source={{
                        uri: 'https;//image.tmdb.org/t/p/w300' + details.poster_path
                    }}
                />
                <Text style={styles.desc}>{details.overview}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        margin: 10,
    },
    article: {
        flex : 1,
    },
    img: {
        flex: 3,
        width: 200,
        height: 300
    },
    desc: {
        flex: 7
    }
});

export default DetailsMovie;