import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        requred 
                        label="email"
                        handleChange = {this.handleChange}
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        requred 
                        label="password"
                        handleChange = {this.handleChange}
                    />
                    <div className='buttons'>
                        <CustomButton 
                            type='submit' 
                        >Sign In</CustomButton>
                        <CustomButton 
                            isGoogleSignIn
                            onClick={signInWithGoogle}
                        >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;