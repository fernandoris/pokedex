import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import {capitalize} from 'lodash'

import getColorByPokemonType from '../utils/GetColorByPokemonType';

export default function PokemonCard(props) {
    const { pokemon } = props;

    const goToPokemon = () => {
        console.log(`Vamos al pokemon: ${pokemon.name}`);
    }

    const pokemonColor = getColorByPokemonType(pokemon.type);
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spaccing}>
                    <View style={bgStyles}>
                        <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                        <Image source={{ uri: pokemon.image }} style={styles.image} />
                        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130
    },
    spaccing: {
        flex: 1,
        padding: 5
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#FFF',
        fontSize: 11
    },
    name: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    }
})