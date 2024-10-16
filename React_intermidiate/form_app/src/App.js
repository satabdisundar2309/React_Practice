import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName]=useState("")
  // const [lastName, setLastName]=useState("")

  // function changeFirstNameHandler(e){
  //   // console.log("printing first name")
  //   // console.log (e.target)
  //   setFirstName(e.target.value)
  //   console.log(firstName)
  // }
  // function changeLastNameHandler(e){
  // //  console.log("printing last name")
  // //   console.log (e.target)
  // setLastName(e.target.value)
  // console.log(lastName)
  // }

  // handling multiple states at once
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });
  // console.log(formData);
  // console.log(formData.email)
  // // console.log(formData.lastName)
  // // console.log(formData.firstName)
  function changeHandler(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // e.target.name=e.target.value this is wrong syntax in react
        // [e.target.name]: e.target.value, //right syntax
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log("Printing all the form datas...");
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <br />
        <br />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="first name"
          onChange={changeHandler}
        />
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="last name"
          onChange={changeHandler}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="email here"
          onChange={changeHandler}
        />
        <br />
        <br />
        <textarea
          placeholder="comments..."
          onChange={changeHandler}
          name="comment"
          value={formData.comment}
        />
        <br />
        <br />
        <input
          type="checkbox"
          id="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="checkbox">Am I visible</label>
        <br />
        <br />
        <fieldset>
          <legend>Modes</legend>
          <input
            type="radio"
            id="online-mode"
            onChange={changeHandler}
            name="mode"
            value="online-mode"
            checked={formData.mode === "online-mode"}
          />
          <label htmlFor="online-mode">Online Mode</label>
          <input
            type="radio"
            id="offline-mode"
            onChange={changeHandler}
            name="mode"
            value="offline-mode"
            checked={formData.mode === "offline-mode"}
          />
          <label htmlFor="offline-mode">Offline mode</label>
        </fieldset>
        <label htmlFor="favCar">Tell me youy fav car</label>
        <select
          onChange={changeHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="safari">Safari</option>
          <option value="harrier">Harrier</option>
          <option value="lambo">Lambo</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
