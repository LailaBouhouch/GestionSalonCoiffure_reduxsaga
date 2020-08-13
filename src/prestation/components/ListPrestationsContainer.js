import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import NavigationMenuComponent from '../../navigationMenu/navigationMenu';

import { GET_PRESTATIONS } from '../actions'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import '../style.scss'



class ListPrestationsComponent extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      prestations: [],
    }
  }*/

  componentDidMount() {
    this.props.getPrestations();
    console.log(this.props.prestations);
    
  }
  

  render() {
    const { fetching, prestations } = this.props
    console.log(this.props)
    return (
      // <div><NavigationMenuComponent /></div>
      (fetching || prestations === undefined)
        ? <div>Loading ...</div>
        : <TableContainer component={Paper}>
          <Table className="table" aria-label="simple table">
            <TableHead className="head">
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell align="left">Tarif</TableCell>
                <TableCell align="left">Durée</TableCell>
                <TableCell align="left">Actions</TableCell>
                <TableCell align="right">
                  <Grid container>
                    <Grid item xs={12}>
                    {/* <Link to={POST_PRESTATION}> */}
                      <IconButton aria-label="update prestation" component="span">
                        <AddCircleIcon />
                      </IconButton>
                    {/* </Link> */}
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prestations.map((prestation) => (
                <TableRow key={prestation.id}>
                  <TableCell component="th" scope="row">
                    {prestation.nom}
                  </TableCell>
                  <TableCell align="left">{prestation.prix}</TableCell>
                  <TableCell align="left">{prestation.duree}</TableCell>
                  <TableCell align="left">
                    <IconButton aria-label="delete" className="delete">
                      <DeleteIcon fontSize="small" color="secondary" />
                    </IconButton>
                    <IconButton aria-label="edit" className="edit">
                      <EditIcon fontSize="small" color="primary" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>)
  }
}

const mapStateTopProps = (state) => {
  return {
    prestations: state.prestationReducer.prestations,
    fetching: state.prestationReducer.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPrestations: () => {
      dispatch({ type: GET_PRESTATIONS })
    }
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(ListPrestationsComponent);
