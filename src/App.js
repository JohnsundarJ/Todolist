import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
// import TodoItem from './Components/TodoItem';


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    backgroundColor: '#bbb'
  },
  each: {
    width: '25%',
    height: '60px',
    fontSize: '35px',
    backgroundColor: 'blue',
    color: 'white'
  },
  eachac: {
    width: '25%',
    height: '60px',
    fontSize: '35px',
    backgroundColor: 'pink',
    color: 'black'
  },
  eacheq: {
    width: '25%',
    height: '60px',
    fontSize: '35px',
    backgroundColor: 'pink',
    color: 'black'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize:"25px"
  },
  textbox: {
    height: '60px',
    backgroundColor: '#bbb',
    width: '100%',
    fontSize: '25px',
    textAlign: 'right'
  },
  text: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    lineHeight: '5px',
  },
});


const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

class App extends Component {

  constructor() {
    super();

    this.state = {
      value: "",
      items: []
    }

    this.handleInput = (event) => {
      this.setState({
        value: event.target.value
      })
    }

    this.handleAddItem = (event) => {
      event.preventDefault();

      if (this.state.value === "")
        return;

      const newItem = {
        task: this.state.value,
        id: Date.now(),
        status: false
      }

      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        value: "",

      }))
    }

    this.handleMarkItemComplete = (itemId) => {

      const updatedItems = this.state.items.map(item => {
        if (itemId === item.id)
          item.status = !item.status;

        return item;
      })

      this.setState({
        items: [].concat(updatedItems)
      })
    }

    this.handleDeleteItem = (itemId) => {

      const updatedItems = this.state.items.filter(item => {
        return item.id !== itemId
      })

      this.setState({
        items: [].concat(updatedItems)
      })
    }
  }

  render() {


    const { classes } = this.props;
    return (
      <div md={12} xs={12}>
        <div className={classes.root}>
          <AppBar position="fixed" color="secondary">
            <Toolbar>
              <Typography className={classes.title}>
                TODO LIST
                          </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div style={{ padding: "40px" }}>
          <Grid container>
            <Grid item md={4} />
            <Grid item md={4} xs={12}>
              <Card style={{
                margin: "auto",
                boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.3)",
                "&:hover": {
                  boxShadow: "0 16px 30px 12.125px rgba(0,0,0,0.3)"
                }
              }}>
                <CardContent>
                  <div style={{paddingTop:"10px"}}></div>
                  <Grid container spacing={3} >
                    <Grid item md={2} />
                    <Grid item md={8} xs={12}>
                      <TextField
                        className={classes.text} id="weight" value={this.state.value} onChange={this.handleInput} label="Add New Task" />

                      {/* <input style={input_style} placeHolder="Add New Todo" type="input" onChange={this.handleInput} value={this.state.value} /> */}
                      {/* <button style={btn_style} type="button" className="btn btn-primary btn-md" onClick={this.handleAddItem}>Add</button> */}

                    </Grid>
                  </Grid>
                  <Grid item md={2} />
                  <br />
                  <Grid container spacing={3} >
                    <Grid item md={4} xs={3} />
                    <Grid item md={4} xs={6}>
                      <BootstrapButton variant="contained" color="primary" fullWidth disableRipple
                        className={classes.margin}
                        onClick={this.handleAddItem}
                      >
                        Add
                              </BootstrapButton>
                    </Grid>
                  </Grid>
                  <Grid item md={4} xs={3} />
                  <br />
                  <TodoList items={this.state.items} deleteItem={this.handleDeleteItem} markItemComplete={this.handleMarkItemComplete} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);




