import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone="+123 456 789"
        email="b@beyonce.com"
      />
    </div>
  );
}

export default App;
