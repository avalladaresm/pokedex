import React, { Component } from 'react';
import './Login.css'
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    flexGrow: 1
  },
  gridList: {
    width: 475,
    height: '100%',
    margin: '0 auto'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
	},
	tilebar: {
		height: '17%'
  },
  fab: {
    position: 'fixed',
    bottom: '20px',
    right: '20px'
  },
  appbar: {
    height: '7%',
    //position: 'static',
    //alignItems: 'middle',
    textAlign: 'center' 
  },
  type: {
    align: 'middle',
  },
};
 
  const tileData = [
    {
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      title: 'Bulbasaur',
		},
		{
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
      title: 'Ivysaur',
		},
		{
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
      title: 'Venusaur',
		},
		{
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      title: 'Charmander',
		},
		{
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
      title: 'Charmeleon',
    },
		{
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
      title: 'Charizard',
    }
  ];

class PokemonList extends Component {
  constructor(props){
    super(props)
       this.state = {
        open: false,
        nextBtn: false,
        pokemon: [{pname:'', pimage:'', ptype:'', ptype2:'', pheight:'', pweight:'', pgender:'', pcatchrate:''}]
    }
    this.onSubmit = this.onSubmit.bind(this);
  }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleNextBtn = () => {
    this.setState({ nextBtn: true });
  }

  onSubmit = () => {
    this.props.onSubmit(this.state.pokemon);
    console.log(this.state.pokemon)
  }


  render() {
		const { classes } = this.props
    return (  
			<div className={classes.root}>
      	<AppBar className={classes.appbar}>
					<Toolbar>
						<Typography className="mui--align-middle" variant="h6" color="inherit">
							Pokédex
						</Typography>
					</Toolbar>
				</AppBar>	
				<GridList cellHeight={240} className={classes.gridList} cols={2}>
					{tileData.map(tile => (
						<GridListTile key={tile.img}>
							<img src={tile.img} alt={tile.title} />
							<GridListTileBar className={classes.tilebar}
								title={tile.title}
								actionIcon={
									<IconButton className={classes.icon}>
										<InfoIcon />
									</IconButton>
								}
							/>
						</GridListTile>
					))}
				</GridList>
        <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClickOpen}>
          <AddIcon />
        </Fab>

        
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          className = {classes.dialog}
        >
          <DialogTitle id="form-dialog-title">Add Pokémon</DialogTitle>
          <DialogContent>
            <DialogContentText>
          <form className="main-container" onSubmit={this.submit} noValidate>
            
            <label>Pokémon Name:</label>
            <div className="pnameclass">
              <Input
                required
                autoComplete="off"
                className="input"
                type="text"
                name="pname"
                value={this.state.pokemon.pname}
              />
            </div>

            <label>Pokémon Image:</label>
            <div className="pimageclass">
              <Input 
                required
                autoComplete="off"
                className="input"
                type="text"
                name="pimage"
                value={this.state.pokemon.pimage}
              />
            </div>

            <div className="type">
              <label>Pokémon Type:</label>
              <div className="ptypeclass">
                <Input 
                  required
                  autoComplete="off"
                  className="input"
                  type="text"
                  name="ptype"
                  value={this.state.pokemon.ptype}
                />
              </div>
              
              <label>Pokémon Type 2:</label>
              <div className="ptype2class">
                <Input 
                  autoComplete="off"
                  className="input"
                  type="text"
                  name="ptype2"
                  value={this.state.pokemon.ptype2}
                />
              </div>
              
              <label>Pokémon Height:</label>
              <div className="pheightclass">
                <Input
                  required
                  autoComplete="off"
                  className="input"
                  type="text"
                  name="pheight"
                  value={this.state.pokemon.pheight}
                />
              </div>

              <label>Pokémon Weight:</label>
              <div className="pweightclass">
                <Input 
                  required
                  autoComplete="off"
                  className="input"
                  type="text"
                  name="pweight"
                  value={this.state.pokemon.pweight}
                />
              </div>

              <label>Pokémon Gender:</label>
              <div className="pgenderclass">
                <Input 
                  required
                  autoComplete="off"
                  className="input"
                  type="text"
                  name="pgender"
                  value={this.state.pokemon.pgender}
                />
              </div>
              
              <label>Pokémon Catch Rate:</label>
              <div className="pcatchclass">
                <Input 
                  autoComplete="off"
                  className="input"
                  type="text"
                  name="pcatch"
                  value={this.state.pokemon.pcatchrate}
                />
              </div>
           
            </div>

            
            
            {/* <Button type="submit" variant="contained" color="primary" classes={{ root: classes.btn }} onSubmit={this.addtolistbtn}>Add to list</Button> */}

          </form>
            </DialogContentText>
            {/* <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            /> */}
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button> */}
            <Button type="submit" variant="contained" color="primary" classes={{ root: classes.btn }} onClick={this.handleNextBtn}>Submit</Button>

          </DialogActions>
        </Dialog>
        
       <div>

      </div>

			</div>    
		);
  }
}

export default withStyles(styles)(PokemonList);