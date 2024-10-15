import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from './utils/colors';

const LoginScreen = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordSet, setPasswordSet] = useState(false);

  const navigation = useNavigation();

  const handleSetPassword = () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      setErrorMessage('');
      setPasswordSet(true);
      // Add your password reset logic here if needed
    }
  };

  const handleLogin = () => {
    navigation.navigate("Home"); // Navigate back to Home screen
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require("../screen/assets/login2.png")}
        style={styles.second} 
      />
      
      <Text style={styles.title}>
        It is mandatory for you to set a new password, which is not the same as the password provided by the admin.
      </Text>

      {/* Check if password has been set to show the success message */}
      {passwordSet ? (
        <View style={styles.successContainer}>
          <Image 
            source={require("../screen/assets/circle.png")} // Replace with the path to your success icon
            style={styles.successIcon} 
          />
          <Text style={styles.successText}>Password reset successfully!</Text>
          <Text style={styles.successDescription}>
            Your password has been successfully reset. Click below to login with new credentials.
          </Text>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Set new password</Text>
          
          <TextInput
            placeholder="Old password"
            secureTextEntry={true}
            style={styles.input}
            value={oldPassword}
            onChangeText={setOldPassword}
          />
          <TextInput
            placeholder="New password"
            secureTextEntry={true}
            style={styles.input}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TextInput
            placeholder="Confirm password"
            secureTextEntry={true}
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          {/* Error message for password mismatch */}
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

          {/* Button inside the input container */}
          <TouchableOpacity style={styles.button} onPress={handleSetPassword}>
            <Text style={styles.buttonText}>Set new password</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,                     
    backgroundColor: '#1C396C', 
    alignItems: 'center',        
    justifyContent: 'center',    
    padding: 20,
  },
  second: {
    height: 180, 
    width: 110,
    marginBottom: -5,
  },
  title: {
    color: colors.White,
    fontSize: 13,
    textAlign: 'center',         
    marginTop: 8,               
    paddingHorizontal: 15,
    marginBottom: -15,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '100%',
    padding: 15,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  label: {
    color: '#1C396C',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
    alignSelf: 'flex-start'
  },
  input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    width: '100%',
    fontSize: 13,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginBottom: 8,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#A9A9A9',
    paddingVertical: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  successContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    marginTop: 15,
  },
  successIcon: {
    height: 40,
    width: 40,
    marginBottom: 10,
  },
  successText: {
    fontSize: 18,
    color: '#28a745',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  successDescription: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
