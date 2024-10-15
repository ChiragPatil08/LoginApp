import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from './utils/colors';
import { fonts } from './utils/fonts';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPassword = () => {
    navigation.navigate("Login");
  };

  const handleLogin = () => {
    // Add login logic here, if needed
    console.log('Login button pressed');
  };

  return (
    <View style={styles.container}>
      <Image source={require("../screen/assets/login1.png")} style={styles.logo} />
      

      {/* Input container */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="User ID"
          style={styles.input}
          value={userId}
          onChangeText={setUserId}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        
        {/* Forgot Password Text */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Secondary Login Button at the Bottom */}
      <TouchableOpacity style={styles.bottomLoginButton} onPress={handleLogin}>
        <Text style={styles.bottomLoginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between', // To push the bottom button to the bottom
  },
  logo: {
    height: 240,
    width: 360,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.SemiBold,
    textAlign: 'center',
    color: colors.black,
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '100%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: '100%',
    fontSize: 14,
  },
  forgotPasswordText: {
    color: colors.primary,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: -10,
  },
  loginButtonText: {
    color: colors.White,
    fontSize: 16,
    fontFamily: fonts.SemiBold,
  },
  bottomLoginButton: {
    backgroundColor: '#A9A9A9', 
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  bottomLoginButtonText: {
    color: colors.White,
    fontSize: 16,
    fontFamily: fonts.SemiBold,
  },
});
