import React, { Component } from 'react';
import './App.css';
import './Login.css'
import Input from '@material-ui/core/Input'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

const styles = {
	btn: {
		display: 'table',
		margin: '0 auto'
	},
	card: {
		marginTop : '30px',
		display: 'table',
		margin: '0 auto'
	}
}

class Login extends Component {
  constructor(props){
     super(props)
       this.state = {
          users: [
             {userName: "Ash Ketchum", userEmail: "ash@pokemon.com", password: "pokedex"},
             {userName: "Misty", userEmail: "misty@pokemon.com", password: "paleta"}
          ]
      }
  }
  
  render() {
		const { classes } = this.props
    return (
			<Card classes={{root: classes.card}}>
				<CardContent>
					<h2 className="h2">Log in to Pokédex</h2>
					<form className="main-container" noValidate>
						
						<label>Email:</label>
						<div className="email">
							<Input
								required
								type="email"
								name="email"
							/>
						</div>

						<label>Password:</label>
						<div className="pw">
							<Input 
								required
								type="password"
								name="pw"
							/>
						</div>
					</form>

					<Button variant="contained" color="primary" classes={{ root: classes.btn }}>Log In</Button>

				</CardContent>
			</Card>
    );
  }
}

export default withStyles(styles)(Login);