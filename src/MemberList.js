import React from "react";
import styled from "styled-components";

function MemberList(props) {
  const { memberList, clearList } = props;

  const SCContainer = styled.div`
    display: flex;
    background-color: green;
    flex-direction: column;
    border: 0.2rem solid white;
    width: 20%;
    margin: 1rem auto;
    row-gap: 1rem;
  `;

  const SCMemberInfo = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <SCContainer>
      <h2>Team Members</h2>
      {memberList.map((member) => (
        <SCMemberInfo>
          <p>Name: {member.name}</p>
          <p>Age: {member.age}</p>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
        </SCMemberInfo>
      ))}
    </SCContainer>
  );
}
export default MemberList;
