import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    title: "",
    lastName: "",
    email: "",
    comments: "",
    age: "",
    image: null,
  });

  function handleChange(event) {
    if (event.target.name === "image") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [event.target.name]: event.target.files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [event.target.name]: event.target.value,
      }));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);

    // Handle file upload on the server side

    // Rest of your code...
  }

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="form-group">
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
          value={formData.title}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
      </div>
      <div className="form-group">
        <textarea
          value={formData.comments}
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="age"
          onChange={handleChange}
          name="age"
          value={formData.age}
        />
      </div>
      <div className="form-group">
        <input
          type="file"
          className="form-control-file"
          id="image"
          name="image"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit API
        </button>
      </div>
    </form>
  );
}
