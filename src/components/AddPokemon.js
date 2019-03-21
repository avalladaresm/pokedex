/*import React, { Component } from 'react';
import './Login.css'
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
//import {Route} from 'react-router-dom';


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
};



class PokemonList extends Component {
  constructor(props){
    super(props)
			this.state = {
				pokemon: [{pname:'', pimage:'', ptype:'', ptype2:'', pheight:'', pweight:'', pgender:'', pcatchrate:''}]
			}
			this.addtolistbtn = this.addtolistbtn.bind(this);
  }
	
  addtolistbtn(event) {
		//return (
			
			//<Route exact path="/pokemonlist" component={PokemonList}/> 
			console.log(this.state.pokemon);
    //);
		//this.props.history.push('/pokemonlist');
	}

	//handleChange()

	render() {
		const { classes } = this.props
		return (
			<Card classes={{root: classes.card}}>
				<CardContent>
					<h2 className="h2">Add Pokémon</h2>
					<form className="main-container" onSubmit={this.submit} noValidate>
						
						<label>Pokémon Name:</label>
						<div className="email">
							<Input
								required
								className="input"
								type="text"
								name="pname"
							/>
						</div>

						<label>Pokémon Image:</label>
						<div className="pw">
							<Input 
								required
								className="input"
								type="text"
								name="pimage"
							/>
						</div>

						<div className="type">
							<label>Pokémon Type:</label>
							<div className="pw">
								<Input 
									required
									className="input"
									type="text"
									name="ptype"
								/>
							</div>
							
							<label>Pokémon Type 2:</label>
							<div className="ptype2">
								<Input 
									className="input"
									type="text"
									name="ptype2"
								/>
							</div>
						</div>
						
						<Button type="submit" variant="contained" color="primary" classes={{ root: classes.btn }} onSubmit={this.addtolistbtn}>Add to list</Button>

					</form>


				</CardContent>
			</Card>
		);
	}
}

export default withStyles(styles)(PokemonList);*/


import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}