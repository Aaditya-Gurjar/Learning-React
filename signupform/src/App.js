import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street_address: "",
    city: "",
    state: "",
    postal_code: "",
    comments: false,
    candidates: true,
    offers: false,
    notification: "everything",
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
  }
  console.log(formData);
  return (
    <div className="App w-100  mt-8 mb-8">
      <h1 className="text-3xl font-bold mt-4 text-center mb-4 underline">
        SignUp!
      </h1>

      <form
        onSubmit={submitHandler}
        className=" flex items-center  flex-col"
        action=""
      >
        <label htmlFor="firstName" className="w-1/2 text-left mb-2">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          className=" border w-1/2 p-1 border-black outline-black outline-offset-0 ring-black-500"
          type="text"
          placeholder="Pranay"
          value={formData.firstName}
          onChange={changeHandler}
        />
        <label htmlFor="lastName" className="w-1/2 text-left mb-2">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          className=" border w-1/2  p-1 border-black outline-black outline-offset-0 ring-black-500"
          type="text"
          placeholder="Gupta"
          onChange={changeHandler}
        />
        <label htmlFor="email" className="w-1/2 text-left mb-2">
          Email address
        </label>
        <input
          id="email"
          value={formData.email}
          name="email"
          className=" border w-1/2   p-1 border-black outline-black outline-offset-0 ring-black-500"
          type="email"
          placeholder="pgupta@gmail.com"
          onChange={changeHandler}
        />
        <label htmlFor="country" className="w-1/2 text-left mb-2">
          Country
        </label>
        <input
          id="country"
          name="country"
          value={formData.country}
          className=" border w-1/2 p-1 border-black outline-black outline-offset-0 ring-black-500"
          type="text"
          placeholder="India"
          onChange={changeHandler}
        />
        <label htmlFor="street" className="w-1/2 text-left mb-2">
          Street address
        </label>
        <input
          id="street"
          name="street_address"
          value={formData.street_address}
          className=" border w-1/2 p-1 border-black outline-black outline-offset-0 ring-black-500"
          type="text"
          placeholder="1234 Main St"
          onChange={changeHandler}
        />
        <label htmlFor="city" className="w-1/2 text-left mb-2">
          City
        </label>
        <input
          id="city"
          name="city"
          value={formData.city}
          className=" border w-1/2 p-1 border-black outline-black outline-offset-0 ring-black-500"
          type="text"
          placeholder="Asansol"
          onChange={changeHandler}
        />
        <label htmlFor="state" className="w-1/2 text-left mb-2">
          State / Province
        </label>
        <input
          id="state"
          name="state"
          value={formData.state}
          className=" border w-1/2 p-1 border-black outline-black outline-offset-0 ring-black-500"
          type="text"
          placeholder="West Benagal"
          onChange={changeHandler}
        />
        <label htmlFor="postal-code" className="w-1/2 text-left mb-2">
          Zip / Postal Code
        </label>
        <input
          id="postal_code"
          name="postal_code"
          value={formData.postal_code}
          className="  border w-1/2 p-1 border-black outline-black outline-offset-0 ring-black-500"
          type="text"
          placeholder="India"
          onChange={changeHandler}
        />
        <label htmlFor="" className="  flex flex-col   w-1/2 text-left mb-2">
          By Email
          <div>
            <input
              id=""
              className="  w-10 p-1"
              type="checkbox"
              placeholder="India"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <label htmlFor="" className="font-semibold">
              Comments
            </label>
            <p className="ml-10">
              Get notified when someones posts a comment on a posting
            </p>
          </div>
          <label htmlFor=""></label>
        </label>

        <label htmlFor="" className="  flex flex-col   w-1/2 text-left mb-2">
          <div>
            <input
              id=""
              className="  w-10 p-1"
              type="checkbox"
              placeholder="India"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <label htmlFor="" className="font-semibold">
              Candidates
            </label>
            <p className="ml-10">
              Get notified when candidatea applies for a job
            </p>
          </div>
          <label htmlFor=""></label>
        </label>

        <label htmlFor="" className="  flex flex-col   w-1/2 text-left mb-2">
          <div>
            <input
              id=""
              className="  w-10 p-1"
              type="checkbox"
              placeholder="India"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <label htmlFor="" className="font-semibold">
              Offers
            </label>
            <p className="ml-10">
              Get Notified when a candidate accepts or rejects an offer
            </p>
          </div>
          <label htmlFor=""></label>
        </label>

        <h3 className="w-1/2 bold font-semibold">Push Notification</h3>
        <p className="w-1/2">
          These are delivered via SMS to your Mobile Phone.
        </p>

        <div className="w-1/2  flex flex-col font-semibold m-2">
          <div>
            <input
              type="radio"
              name="notification"
              id="everything"
              value="everything"
              onChange={changeHandler}
              checked={formData.notification === "everything"}
            />
            <label htmlFor="everything" className="ml-2">
              Everything
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="notification"
              id="same_as_email"
              value="same as email"
              onChange={changeHandler}
              checked={formData.notification === "same as email"}
            />
            <label className="ml-2" htmlFor="same_as_email">
              Same as email
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="notification"
              id="no_push_notificaiton"
              value="no push notification"
              onChange={changeHandler}
              checked={formData.notification === "no push notification"}
            />
            <label className="ml-2" htmlFor="no_push_notificaiton">
              No push Notificaion
            </label>
          </div>
        </div>

        <button className=" flex text-white justify-start pl-2 pr-2 bg-blue-600">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
