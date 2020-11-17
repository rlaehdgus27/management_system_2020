import React, { Component, component } from "react";
import Customer from "./component/Customer";
import "./App.css";

const customer = {
  name: "홍길동",
  birthday: "950427",
  gender: "남자",
  job: "지구인",
};

class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
