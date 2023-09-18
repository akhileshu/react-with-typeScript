import { useState, FormEvent } from "react";

// ex form handling with useState

interface Person {
  name: string;
  age: number;
}
function App() {
  const [user, setUser] = useState<Person>(); //at start user is undefined
  // to get type of e -> onSubmit try {(e)=>{}}
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={user?.name || ""} //Warning: A component is changing an uncontrolled input to be controlled.
          placeholder="name"
          onChange={(e) => {
            // prev! -> to remove error because user can be undefined
            setUser((prev) => ({ ...prev!, name: e.target.value }));
          }}
        />
        <input
          type="number"
          value={user?.age || ""} //Warning: A component is changing an uncontrolled input to be controlled.
          placeholder="age"
          onChange={(e) => {
            // prev! -> to remove error because user can be undefined
            setUser((prev) => ({ ...prev!, age: Number(e.target.value) }));
          }}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
