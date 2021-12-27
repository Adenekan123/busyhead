import React from "react";
import { Wrapper } from "./ProfileList.Styles";

export default function ProfileList({ data, logout }) {
  if (!data) return <p>No Profile</p>;
  return (
    <Wrapper>
      <p>Name:{data.firstname + " " + data.lastname}</p>
      <p>Phone:{data.phone}</p>
      <p>Email:{data.email}</p>
      <center>
        <button onClick={logout}>Logout</button>
      </center>
    </Wrapper>
  );
}
