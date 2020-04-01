import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getUserList } from './action/appAction';

// import { withStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from "@material-ui/core/Modal";
import Grid from '@material-ui/core/Grid';
import cx from 'classnames';
import { Button, withStyles } from '@material-ui/core';

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';

const tableHeader = [
  { id: 'id', label: 'Id' },
  { id: 'real_name', label: 'Name' },
  { id: 'tz', label: 'Timezone' }
];

class App extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.listOfUsers !== prevState.ListOfUsers) {
      return { ListOfUsers: nextProps.listOfUsers }
    }
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      ListOfUsers: [],
      modalOpen: false,
      isDateSelected: false,
      selectedDate: new Date('Jan 1 2020')
    }
    this.clickedOnName = this.clickedOnName.bind(this);
    this.clickedOnNo = this.clickedOnNo.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  // when mount get the user data
  componentDidMount() {
    this.props.getUserList();
  }
  // displaying the table content
  renderTable = () => {
    const { classes } = this.props;
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeader.map((headerData) => {
                return <TableCell align="center">{headerData.label}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.ListOfUsers.map((row) => {
              return (
                <TableRow>
                  <TableCell align="center">
                    {row.id}
                  </TableCell>
                  <TableCell align="center" style={{ cursor: 'pointer' }} onClick={this.clickedOnName.bind(this, row)}>
                    {row.real_name}
                  </TableCell>
                  <TableCell align="center">
                    {row.tz}
                  </TableCell>
                </TableRow>
              )
            })}

          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  // while clicked on name of any any user
  clickedOnName(rowData) {
    console.log("clickedOnName called", rowData);
    this.setState({
      modalOpen: true,
      activityPeriods: rowData.activity_periods
    })
  }
  // modal closed on outside click or in modal buttons
  handleClose() {
    this.setState({
      modalOpen: false,
      isDateSelected: false
    })
  }

  // modal cancel clicked
  clickedOnNo() {
    this.setState({
      modalOpen: false,
      isDateSelected: false
    })
  }
  // after selecting date in calender
  handleDateChange(date) {
    this.setState({
      selectedDate: date,
      isDateSelected: true
    })
  }
  // when u select the calender date for dispaying data
  displayCalenderUserActivity() {
    const { selectedDate } = this.state;
    const date = new Date(selectedDate).getDate();
    const month = new Date(selectedDate).toLocaleString('default', { month: 'short' });
    const year = new Date(selectedDate).getFullYear();
    const finalDateObj = month + " " + date + " " + year;
    const finalData = this.state.activityPeriods.find((item) => item.start_time.includes(finalDateObj));
    if (finalData) {
      let dateString = "";
      var startTimeArr = finalData.start_time.split(" ");
      for (var i = 0; i < startTimeArr.length - 1; i++) {
        dateString = dateString + startTimeArr[i] + " ";
      }
      const startTime = startTimeArr[startTimeArr.length - 1]
      var endTimeArr = finalData.end_time.split(" ");
      const endTime = endTimeArr[endTimeArr.length - 1];
      // when u select the calender this things for getting data
      return (
        <React.Fragment>
          <Grid container={true}>
            <Grid item={true} md={3}>
              {dateString}
            </Grid>
            <Grid item={true} md={3}>
              {startTime} - {endTime}
            </Grid>
          </Grid>
        </React.Fragment>
      )
    }
    else {
      return null;
    }
  }
  // when u click on the user name in the modal display the fields
  displayUserActivity() {
    return this.state.activityPeriods && this.state.activityPeriods.map((item) => {
      let dateString = "";
      var startTimeArr = item.start_time.split(" ");
      for (var i = 0; i < startTimeArr.length - 1; i++) {
        dateString = dateString + startTimeArr[i] + " ";
      }
      const startTime = startTimeArr[startTimeArr.length - 1]
      var endTimeArr = item.end_time.split(" ");
      const endTime = endTimeArr[endTimeArr.length - 1];
      // when u select the calender this things for getting data

      return (
        <React.Fragment>
          <Grid container={true}>
            <Grid item={true} md={3}>
              {dateString}
            </Grid>
            <Grid item={true} md={3}>
              {startTime} - {endTime}
            </Grid>
          </Grid>
        </React.Fragment>
      )
    })
  }
  // this is for the modal content
  modalContent() {
    const modalContent = (
      <div className={cx(this.props.classes.paper, this.props.classes.modalPosition)}>
        {/* <h2>Text in a modal</h2> */}
        <React.Fragment>
          <Grid container={true} alignItems="center" style={{ marginBottom: '10px' }}>
            <Grid item={true} md={3}>
              Active Date
            </Grid>
            <Grid item={true} md={3}>
              Active Timing
            </Grid>
            <Grid item={true} md={4}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={this.state.selectedDate}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
        </React.Fragment>
        {this.state.isDateSelected ? this.displayCalenderUserActivity() : this.displayUserActivity()}
        <Grid container={true} justify="flex-end">
          <Grid item={true}>
            <Button
              onClick={this.clickedOnNo}
              variant="contained"
              color="primary">Cancel</Button>
          </Grid>
        </Grid>
      </div>
    );
    return modalContent;
  }
  // when component render
  render() {
    if (!this.state.ListOfUsers) {
      return null;
    }
    else {
      return (
        <div className="App">
          <header className="App-header">
            Welcome to React
            {this.renderTable()}
          </header>
          <Modal
            open={this.state.modalOpen}
            onClose={this.handleClose.bind(this)}
          >
            {this.modalContent()}
          </Modal>
        </div>
      );
    }
  }
}
// action which brings the data from reducer
const mapDispatchToProps = {
  getUserList
}

const mapStateToProps = ({ AppReducer }) => {
  return {
    listOfUsers: AppReducer.ListOfUsers && AppReducer.ListOfUsers.members
  }
}
// styling using material ui theme in material components
const styles = theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: 'white',
    border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3)
  },
  table: {
    minWidth: 650,
  },
  modalPosition: {
    minWidth: '60%',
    padding: '10px',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));

