import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { COLORS, icons } from '../../../constants';

const SearchBar = (props) => {
  return (
    <View style={styles.searchBar}>
        <Image
              source={icons.searchIcon}
              resizeMode='contain'
              style={{
                alignSelf: 'center',
                width: 20,
                height: 20,
                marginHorizontal: 10,
                tintColor: COLORS.darkgray,
              }}
          />
        <TextInput
          onPress={props.onPress}
          placeholder='Search'
          style={styles.searchInput}
        >
        </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({

  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '90%',
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 15,
    height: 45,
    padding: 10
  },
	searchIcon: {
        alignItems: 'center',
        justifyContent: 'center',
		  padding: 10,
        borderColor: COLORS.lightGray,
        borderWidth: 1.5,
        borderRadius: 14,
        width: 45,
        height: 45,
	},
  searchInput: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  }

});

export default SearchBar;
