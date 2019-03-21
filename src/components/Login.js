import React, { Component } from 'react';
import './Login.css';
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
	},
	grow: {
		flexGrow: 1,
	},
	appbar: {
		position : 'fixed',
		color: 'red',
		margin: 0,
		height: '35px'
	}
}

class Login extends Component {
  constructor(props){
     super(props)
       this.state = {
          users: [
             {userName: "Ash", userEmail: "ash@pokemon.com", password: "pokedex"},
			 {userName: "Misty", userEmail: "misty@pokemon.com", password: "paleta"},
			 {userName: "", userEmail: "", password: ""}
          ]
			}
			this.submit = this.submit.bind(this);
  }
	
	submit(event) {
		//console.log(this.users[0].userEmail);
		//console.log(this.users[0].password);
		// if(this.state.userName === this.users.userName[0] && this.state.password === this.users.password[0]){
		 	this.props.history.push('/pokemonlist');
		// 	console.log("Usuario es Ash")
		// }else if(this.state.userName === this.users.userName[1] && this.state.password === this.users.password[1]){
		// 	this.props.history.push('/pokemonlist');
		// 	console.log("Usuario es Misty")
		// }
		// else{
		// 	console.log("Usuario no existe")
		// }
	}

	render() {
		const { classes } = this.props
		return (
			<div>
				<Card classes={{root: classes.card}}>
					<CardContent>
						<h2 className="h2">Log in to Pokédex</h2>
						<form className="main-container" onSubmit={this.submit} noValidate>
							
							<label>Email:</label>
							<div className="email">
								<Input
									required
									className="input"
									type="email"
									name="email"
									//value={this.users.userEmail}
									//onChange={this.onChange}
								/>
							</div>

							<label>Password:</label>
							<div className="pw">
								<Input 
									required
									className="input"
									type="password"
									name="pw"
									//value={this.users.password}
									//onChange={this.onChange}
								/>
							</div>
							
							<Button type="submit" variant="contained" color="primary" classes={{ root: classes.btn }}>Log In</Button>

						</form>


					</CardContent>
				</Card>
			</div>
		);
	}
}

export default withStyles(styles)(Login);