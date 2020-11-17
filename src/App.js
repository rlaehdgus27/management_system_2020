import React, { Component } from "react";
import Customer from "./component/Customer";
import "./App.css";

const customer = [
  {
    id: 1,
    // image: "",
    name: "서달미",
    birthday: "950427",
    gender: "여자",
    job: "CEO",
  },
  {
    id: 2,
    // image: "",
    name: "남도산",
    birthday: "901107",
    gender: "남자",
    job: "개발자",
  },
  {
    id: 3,
    // image: "",
    name: "한지평",
    birthday: "880312",
    gender: "남자",
    job: "투자자",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {customer.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              // image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
