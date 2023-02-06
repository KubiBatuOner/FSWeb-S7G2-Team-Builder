import React, { useState } from "react";
import Form from "./Form";
import MemberList from "./MemberList";
import "./App.css";

function App() {
  const [memberList, setMemberList] = useState([]);
  const [member, setMember] = useState({
    name: "",
    age: null,
    email: "",
    role: "",
  });
  let disableButton = true;
  let clearListDisableButton = true;

  function handleSubmit(event) {
    event.preventDefault();
    setMemberList([...memberList, member]);
    setMember({
      name: "",
      age: null,
      email: "",
      role: "",
    });
  }

  function handleChange(event) {
    setMember({ ...member, [event.target.id]: event.target.value });
  }

  function clearList() {
    setMemberList([]);
  }

  if (
    member.name !== "" &&
    member.age !== null &&
    member.email &&
    member.role !== ""
  ) {
    disableButton = false;
  }

  if (memberList.length > 0) {
    clearListDisableButton = false;
  }

  return (
    <div className="App">
      <Form
        member={member}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        clearList={clearList}
        disableButton={disableButton}
      />
      <MemberList member={member} memberList={memberList} />
    </div>
  );
}

export default App;
