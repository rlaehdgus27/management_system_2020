import React, { Component } from "react";
import Customer from "./component/Customer";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

const customer = [
  {
    id: 1,
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMTVfMjk0%2FMDAxNTg0Mjc5Njg5MjE1.7qvQXOFD4GC9gPuRNoF-ouUt9kz_ctx0KU8D_uKaUXwg.zNjsnDLvrEx6Gnvpn2wl9g0E_SfuguHxwfDgY6UuITog.JPEG.type098%2F%25B9%25E8%25BC%25F6%25C1%25F62.jpg&type=sc960_832",
    name: "서달미",
    birthday: "941010",
    gender: "여자",
    job: "CEO",
  },
  {
    id: 2,
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAyMDEwMjNfMjY2%2FMDAxNjAzNDM2MjAzNzky.NwTO2J47IWEzOhN0TGvxD4xfDftQWCjo7u7YQOS0PRAg.UgsdGD3O6-i1DIv-t2kHEgFqxl6ZrKcoRdsQoy4q40Ig.JPEG%2FI5yCrWT5EMtRnJrUOa1dMt63FpPY.jpg&type=sc960_832",
    name: "남도산",
    birthday: "940222",
    gender: "남자",
    job: "개발자",
  },
  {
    id: 3,
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMTlfOTYg%2FMDAxNjAzMTE0NjU3MTky.e2swv5f3sq7FXoRoT3IxVQhsOxiZzF5C8-WAw-dMCXEg.sF9jMjhX9woNv3-rJ7H-lQcCXufFuBfjv78vk8T8KuEg.JPEG.beckyhair%2F%25BD%25BA%25C5%25B8%25C6%25AE%25BE%25F715.jpg&type=sc960_832",
    name: "한지평",
    birthday: "860508",
    gender: "남자",
    job: "투자자",
  },
];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customer.map((c) => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
