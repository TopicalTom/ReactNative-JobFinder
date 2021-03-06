import auth from '@react-native-firebase/auth';
import { 
    loginFail, 
    loginSuccess 
} from './types';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

// Base Auth Redux Actions
export const handleLogInFail = dispatch => { dispatch({ type: loginFail }) };
export const handleLogInSuccess = user => dispatch => {
    dispatch({ type: loginSuccess, payload: user })
};

// Firebase Apple Auth Handler

// Firebase Google Auth Handler
export const googleSignIn = async () => {
    try {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User cancelled action');
        } else if (error.code === statusCodes.IN_PROGRESS) {
            Alert.alert('Process in progress');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            Alert.alert('Play services are not available');
        } else {
            Alert.alert('Something else went wrong... ', error.toString());
        };
    };

};

// Firebase Email Auth Handler

// Firebase Phone Auth Handler

// Firebase Auth Sign Out Handler
export const signOut = async () => {
    try {
        await auth().signOut();
    } catch (error) {
        Alert.alert('Something else went wrong... ', error.toString());
    };
};

export const googleSignOut = async dispatch => {
    try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
    } catch (error) {
        Alert.alert('Something else went wrong... ', error.toString());
    };
};