import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, icons } from '../../constants';

const PhotoGallery = (props) => {

    return (
        <View>
            {/* create an instagram photo gallery */}
            <ScrollView style={[styles.gallery, { flexDirection: 'row', flexWrap: 'wrap' }]}>
                
            </ScrollView>
        </View>
    );
};

export default PhotoGallery;

const styles = StyleSheet.create({
    gallery: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: 10,
        backgroundColor: COLORS.white,
        elevation: 5,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    image: {
        
    },
});