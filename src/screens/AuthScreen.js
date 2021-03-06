import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { WEB_CLIENT_ID } from '@env';

// Store
import { connect } from 'react-redux';
import { googleSignIn } from '../actions';

const AuthScreen = ({ user }) => {
    const configureGoogleSign = (clientId) => {
        GoogleSignin.configure({
            webClientId: `${clientId}`,
            offlineAccess: false
        });
    };

    useEffect(() => {
        configureGoogleSign(WEB_CLIENT_ID);
    }, []);
  
    return (
        <SafeAreaView style={styles.container}>
            <Text 
                style={styles.subtitleStyle}>
                Let's get started
            </Text>
            <Text h3 
                style={styles.titleStyle}>
                Select your sign up method
            </Text>
            <Button 
                title="Sign in with Apple"
                titleStyle={styles.platformTextStyle}
                buttonStyle={styles.appleButtonStyle}
                icon={
                    <Icon
                        name="apple1"
                        type="antdesign"
                        size={16}
                        color="white"
                        paddingLeft={6}
                    />
                } 
                onPress={() => googleSignIn()}
            />
            <Button 
                title="Continue with Google"
                titleStyle={styles.platformTextStyle}
                buttonStyle={styles.googleButtonStyle}
                icon={
                    <Icon
                        name="google"
                        type="antdesign"
                        size={16}
                        color="white"
                        paddingLeft={6}
                    />
                } 
                onPress={() => googleSignIn()}
            />
            <Button 
                title="Continue with email"
                titleStyle={styles.defaultTextStyle}
                buttonStyle={styles.defaultButtonStyle}
                icon={
                    <Icon
                        name="email"
                        type="materialcommunity"
                        size={16}
                        color="#B6B6B6"
                        paddingLeft={6}
                    />
                } 
                onPress={() => googleSignIn()}
            />
            <Button 
                title="Use mobile number"
                titleStyle={styles.defaultTextStyle}
                buttonStyle={styles.defaultButtonStyle}
                icon={
                    <Icon
                        name="smartphone"
                        type="materialicons"
                        size={16}
                        color="#B6B6B6"
                        paddingLeft={6}
                    />
                } 
                onPress={() => googleSignIn()}
            />
            <Button 
                title="Log in to existing account"
                titleStyle={styles.altTextStyle}
                buttonStyle={styles.altButtonStyle}
                iconRight
                icon={
                    <Icon
                        name="chevron-small-right"
                        type="entypo"
                        size={16}
                        color="#B6B6B6"
                        paddingLeft={2}
                    />
                } 
                onPress={() => googleSignOut()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    subtitleStyle: {
        textAlign: 'left',
        color: "#B6B6B6",
        width: 295,
        marginBottom: 8
    },
    titleStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 40,
        width: 295
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    defaultTextStyle: {
        fontSize: 14,
        fontWeight: '600',
        paddingLeft: 12,
        color: '#909090'
    },
    platformTextStyle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        paddingLeft: 12,
    },
    altTextStyle: {
        color: '#565656',
        fontSize: 14,
        fontWeight: '600',
    },
    appleButtonStyle: {
        backgroundColor: 'rgba(0,0,0,1)',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,1)',
        width: 295,
        marginBottom: 8,
        height: 48,
        justifyContent: 'flex-start'
    },
    googleButtonStyle: {
        backgroundColor: 'rgba(76,139,245,1)',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(76,139,245,1)',
        marginBottom: 8,
        width: 295,
        height: 48,
        justifyContent: 'flex-start'
    },
    defaultButtonStyle: {
        backgroundColor: '#F2F2F2',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F2F2F2',
        marginBottom: 8,
        width: 295,
        height: 48,
        justifyContent: 'flex-start'
    },
    altButtonStyle: {
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#fff',
        marginBottom: 8,
        width: 295,
        height: 48,
        justifyContent: 'flex-start'
    },
    status: {
        marginVertical: 20
    },
    loggedinMessage: {
        fontSize: 20,
        color: 'tomato'
    }
});

const mapStateToProps = ({ authentication }) => {
    return { 
        user: authentication.user,  
    };
}

export default connect(mapStateToProps, { googleSignIn })(AuthScreen);