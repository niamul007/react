import React from "react";

function Form() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    area: "",
    gender: "",
    favCountry: "",
  };
  const [formData,setData]=React.useState(()=>{
    return JSON.parse(localStorage.getItem("formData")) || initialFormData
  })
  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  function reset(event){
    setData(initialFormData)
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    reset()
  }

  React.useEffect(()=>{
    localStorage.setItem("formData",JSON.stringify(formData))
  },[formData])
  return (
    <div id="formContainer">
      <h1>React Form</h1>
      <form action="" className="form" onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="label">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          name="firstName"
          className="input"
          onChange={handleChange}
          value={formData.firstName}
        />
        <label htmlFor="lastName" className="label">
          Last Name
        </label>

        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          name="lastName"
          className="input"
          onChange={handleChange}
          value={formData.lastName}
        />
        <label htmlFor="email" className="label">
          Eamil
        </label>

        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          name="email"
          className="input"
          onChange={handleChange}
          value={formData.email}
        />
        <label htmlFor="contact" className="label">
          Contact
        </label>

        <input
          type="text"
          id="contact"
          placeholder="Enter your contact"
          name="contact"
          className="input"
          onChange={handleChange}
          value={formData.contact}
        />
        <div className="gender">
          <p className="genderTitle">Gender</p>
          <div className="genderDiv">
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="male"
              className="genderTag"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="female"
              className="genderTag"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            <label htmlFor="other">Other</label>
            <input
              type="radio"
              name="gender"
              id="other"
              className="genderTag"
              value="other"
              checked={formData.gender === "other"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="country">
          <label htmlFor="country" className="label">
            Country
          </label>
          <select name="favCountry" id="country" onChange={handleChange}>
            <option value="">Select</option>
            <option value="Japan">Japan</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="London">London</option>
          </select>
        </div>
        <label htmlFor="area" id="area">
          Tell about yourself
        </label>
        <textarea
          name="area"
          id=""
          cols="66"
          rows="10"
          value={formData.area}
          onChange={handleChange}
        ></textarea>
        <div className="btns">
          <button type="reset" className="btn" onClick={reset}>
            Reset
          </button>
          <button type="submit" className="btn" onSubmit={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
