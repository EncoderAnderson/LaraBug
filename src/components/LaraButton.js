import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';

const { width, height } = Dimensions.get('window');

export default function LaraButton(focused, size, color) {

    return (
        <View style={{ backgroundColor: focused ? '3eccf5' : '#6fdfff' }}>
            <TouchableOpacity style={{ borderRadius: 50, borderWidth: 2, marginBottom: height * 0.13, borderColor: '#FF00FF', shadowRadius: 5, shadowColor: 'black' }}>
                <Image
                    color={focused ? '#FFF' : '#DDD'}
                    size={size}
                    source={require('../../assets/LaraSalve.png')}
                    style={{ width: 50, height: 50, borderRadius: 50, borderTopWidth: 2 }}
                />
            </TouchableOpacity>
        </View>
    )
}

