import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import firebase from 'firebase';
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            // TODO: add a picker so the user can choose there security questions
            securityQuestions: {
                'What was the name of your 1st grade teacher?': '',
                'Where did your mother and father meet?': '',
                'What was the make and model of your first car?': ''
            },
            name: '',
        };
        this.onSignUp = this.onSignUp.bind(this);
    };

    onSignUp() {
        const { email, password, securityQuestions, firstName, lastName } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => { 
            console.log(result);
        })
        .catch((error) => {
            if(error.code === "auth/invalid-email"){
                alert("invalid email address please try again!")
            }
            if(error.code === "auth/weak-password") {
                alert("Weak Password: \nPassword should be at least 6 characters")
            }
        })
    }
    render() {
        return (
            <View>
                <TextInput
                    placeholder="email"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button
                    onPress={() => { this.onSignUp() }}
                    title="Sign In"
                />
            </View>
        )
    }
}


export default Login