import { useState } from 'react';

function MyForm() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  // Save input box value to state when it has been changed
  const handleChange = (event) => {
    setUser({...user, [event.target.name]:
        event.target.value});
  }

  const handleSubmit = (event) => {
    alert('Hello ${user.firstName} ${user.lastName}');
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First name </label>
      <input type="text" name="firstName" onChange=
          {handleChange}
        value={user.firstName}/><br/>
      <label>Last name </label>
      <input type="text" name="lastName" onChange=
          {handleChange}
        value={user.lastName}/><br/>
      <label>Email </label>
      <input type="email" name="email" onChange=
          {handleChange}
        value={user.email}/><br/>
      <input type="submit" value="Submit"/>
    </form>
  );
};

export default MyForm;
