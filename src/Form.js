import React from "react";

function Form(props) {
  const {
    member,
    handleChange,
    handleSubmit,
    disableButton,
    clearList,
    clearListDisableButton,
  } = props;

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <p>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              value={member.name}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="age">
            Age:
            <input
              type="number"
              id="age"
              value={member.age}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            E-mail:
            <input
              type="text"
              id="email"
              value={member.email}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="role">
            Role:
            <input
              type="text"
              id="role"
              value={member.role}
              onChange={handleChange}
            />
          </label>
        </p>
        <button type="submit" disabled={disableButton}>
          Add
        </button>
        <button
          type="reset"
          disabled={clearListDisableButton}
          onClick={clearList}
        >
          Clear List
        </button>
      </form>
    </div>
  );
}
export default Form;
