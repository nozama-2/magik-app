import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { t } from "react-native-tailwindcss";
import { icons } from '../../constants';
import InterestOption from './components/InterestOption';
import SettingsButton from './components/SettingsButton';
import { COLORS } from '../../constants';

function ProfileScreen({ navigation }) {

    return (
        <SafeAreaView>
            
            <View style={[t.flex, t.flexRow, t.justifyBetween, t.mT8, t.mR6, t.z10, {alignItems: 'center'}]}>
                <Text style={[styles.header, t.text3xl, t.mL10]}>Profile</Text>

                <SettingsButton onPress={() => navigation.push("Settings")} />

            </View>


            <ScrollView style={[t.wFull]} showsVerticalScrollIndicator={false}>
                <View style={[t.flex, t.flexCol, t.itemsCenter, t.justifyCenter]}>

                        <Image
                            source={require("../../assets/template_backgrounds/student_1.png")}
                            style={[styles.image, t.mT6,
                                {
                                    borderRadius: 100,
                                    height: 150,
                                    width: 150
                                }]}
                                resizeMode="contain"
                        />


                    <View style={[t.mT1, { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }]}>

                        <Text style={[t.mT4, styles.header]}>Cedric Khua</Text>

                        {/* <View>
                            <Text style={[t.mL2, styles.subTitle]}>
                                Coder, 19 years old
                            </Text>
                        </View> */}

                        <View style={[t.mT5]}>
                            <TouchableOpacity style={[styles.button, t.itemsCenter, styles.shadow]}>
                                <Image source={icons.editIcon} style={[styles.icons, t.mR3, t.tintWhite]} />
                                <Text style={[styles.buttonText]}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    
                </View>

                <View style={[t.mX6, t.mT8]}>
                    <Text style={[t.mT7, styles.subHeader]}>About</Text>
                        <Text style={[t.mL2, styles.aboutText]}>
                            I just graduated from Hwa Chong Junior College. I am currently serving  in the SAF.
                        </Text>
                </View>

                <View style={[t.mX6, t.mT8, t.mB8, t.mL6]}>
                    <Text style={[styles.subHeader]}>Interests</Text>
                    <View style={styles.container}>
                        <View style={[t.flex, t.flexRow, t.flexWrap, t.mL2, t.mT2]}>
                            <InterestOption selected={true} interestText="Coding" />
                            <InterestOption selected={true} interestText="Skiing" />
                            <InterestOption selected={false} interestText="Badminton" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    header: {
        color: "black",
        fontSize: 20,
        textAlign: "justify",
        fontFamily: "Poppins-Bold"
    },

    subHeader: {
        color: "black",
        fontSize: 20,
        fontFamily: "Poppins-Bold",
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 15
    },

    subTitle: {
        color: "black",
        fontSize: 15,
        fontFamily: "Poppins-Normal",
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 15
    },

    subText: {
        color: "grey",
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Poppins-Normal"
    },

    aboutText: {
        fontSize: 15,
        marginLeft: 15,
        marginTop: 5,
        fontFamily: "Poppins-Normal",
        textAlign: "justify",
        color: "black",
    },

    image: {
        width: 180,
        height: 180,
        borderRadius: 180 / 2,
    },

    icons: {
        width: 15,
        height: 16,
    },

    icon: {
        margin: 2,
        height: 15,
        width: 15,
    },

    currency: {
        width: 22,
        height: 22,
    },

    button: {
        borderRadius: 25,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.9,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 7 },
        backgroundColor: COLORS.primary,
        width: 130,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    buttonText: {
        fontFamily: "Poppins-Normal",
        color: "white",
        fontSize: 13,
    },

    interestsContainer: {
        margin: 5,
        backgroundColor: '#F2F2F2',
        borderRadius: 25,
        paddingTop: 8,
        paddingBottom: 8,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.9,
        shadowRadius: 15,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.84,
        elevation: 2,
    },
    galleryContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        width: '90%',
    }
});