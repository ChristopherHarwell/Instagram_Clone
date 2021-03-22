import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native';

export class Register extends Component {
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
            firstName: '',
            lastName: ''
        };
        this.onSignUp = this.onSignUp.bind(this);
    };

    onSignUp() {
        
    }
    render() {
        return (
            <View>
                <TextInput
                    placeholder="first name"
                    onChangeText={(firstName) => this.setState({ firstName  })}
                />
                <TextInput
                    placeholder="last name"
                    onChangeText={(lastName) => this.setState({ lastName  })}
                />
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password  })}
                />
                <Button 
                    onPress={() => {this.onSignUp()}}
                    title="Sign Up" 
                />
            </View>
        )
    }
}
