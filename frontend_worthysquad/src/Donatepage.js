import React from "react";

function Donatepage() {
  const data = [
    {
      id: 1,
      name: "faiq",
      email_id: "faiq@gmail.com",
      event_name: "plantation",
      Amount_donated: "10000",
    },
    {
      id: 2,
      name: "saif",
      email_id: "saif@gmail.com",
      event_name: "chid Education",
      Amount_donated: "20000",
    },
    {
      id: 3,
      name: "atfan",
      email_id: "atfan@gmail.com",
      event_name: "Charity",
      Amount_donated: "20000",
    },
  ];

  return (
    <div>
      {data.map((user) => (
        <div>
          <h1>{`Name:${user.name} ID:${user.id}  email_id:${user.email_id}   event_name: ${user.event_name}  Amount_donated:${user.Amount_donated}`}</h1>
        </div>
      ))}
    </div>
  );
}

export default Donatepage;
