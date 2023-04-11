/*eslint no-unused-expressions: "off"*/
import { useEffect } from "react";
import useInput from "../hooks/use-Input";

const AddUser = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: userName,
    isValid: userNameIsValid,
    hasError: userNameInputHasError,
    valueChangeHandler: userNameChangedHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: userStreet,
    isValid: userStreetIsValid,
    hasError: streetInputHasError,
    valueChangeHandler: streetChangedHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreetInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: userSuit,
    isValid: userSuitIsValid,
    hasError: suitInputHasError,
    valueChangeHandler: suitChangedHandler,
    inputBlurHandler: suitBlurHandler,
    reset: resetSuitInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: userCity,
    isValid: cityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangedHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: userZipCode,
    isValid: zipCodeIsValid,
    hasError: zipCodeInputHasError,
    valueChangeHandler: zipCodeChangeHandler,
    inputBlurHandler: zipCodeBlurHandler,
    reset: resetZipCodeInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: userLat,
    isValid: latIsValid,
    hasError: latInputHasError,
    valueChangeHandler: latChangeHandler,
    inputBlurHandler: latBlurHandler,
    reset: resetLatInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: userPhone,
    isValid: phoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: userWebsite,
    isValid: websiteIsValid,
    hasError: websiteInputHasError,
    valueChangeHandler: websiteChangeHandler,
    inputBlurHandler: websiteBlurHandler,
    reset: resetWebsiteInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: userLong,
    isValid: longIsValid,
    hasError: longInputHasError,
    valueChangeHandler: longChangeHandler,
    inputBlurHandler: longBlurHandler,
    reset: resetLongInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    userNameIsValid &&
    userStreetIsValid &&
    cityIsValid &&
    userSuitIsValid &&
    zipCodeIsValid &&
    latIsValid &&
    longIsValid &&
    websiteIsValid &&
    phoneIsValid
  ) {
    formIsValid = true;
  }

  let preDefineObject = {
    name: "Mian 1122",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    console.log("formSubmissionHandler", formSubmissionHandler);

    if (!enteredNameIsValid) {
      return;
    } else {
      preDefineObject.name = enteredName;
      preDefineObject.username = userName;
      preDefineObject.email = enteredEmail;
      preDefineObject.street = userStreet;
      preDefineObject.suit = userSuit;
      preDefineObject.city = userCity;
      preDefineObject.zipCode = userZipCode;
      preDefineObject.lat = userLat;
      preDefineObject.long = userLong;
      preDefineObject.website = userWebsite;
      preDefineObject.phone = userPhone;

      let response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "post",
        body: JSON.stringify(preDefineObject),
      });

      response.status === 201
        ? (resetNameInput(),
          resetEmailInput(),
          resetUserNameInput(),
          resetStreetInput(),
          resetSuitInput(),
          resetCityInput(),
          resetLatInput(),
          resetLongInput(),
          resetWebsiteInput(),
          resetPhoneInput(),
          resetZipCodeInput())
        : "";
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid "
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const userNameInputClasses = userNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const streetInputClasses = streetInputHasError
    ? "form-control invalid"
    : "form-control";

  const suiteInputClasses = suitInputHasError
    ? "form-control invalid"
    : "form-control";

  const zipCodeInputClasses = zipCodeInputHasError
    ? "form-control invalid"
    : "form-control";

  const cityInputClasses = cityInputHasError
    ? "form-control invalid"
    : "form-control";

  const latInputClasses = latInputHasError
    ? "form-control invalid"
    : "form-control";

  const longInputClasses = longInputHasError
    ? "form-control invalid"
    : "form-control";

  const websiteInputClasses = websiteInputHasError
    ? "form-control invalid"
    : "form-control";

  const phoneInputClasses = phoneInputHasError
    ? "form-control invalid"
    : "form-control";

  useEffect(() => {}, []);

  return (
    <form onSubmit={formSubmissionHandler}>
      <h3>User Info</h3>
      <div className="d-flex justify-content-center">
        <div className={nameInputClasses + " mr-2"}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={userNameInputClasses + " mr-2"}>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            onChange={userNameChangedHandler}
            onBlur={userNameBlurHandler}
            value={userName}
          />
          {nameInputHasError && (
            <p className="error-text">User Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className={emailInputClasses}>
          <label htmlFor="email">Your E-Mail</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>
      </div>

      <h3>Address</h3>
      <div className="d-flex justify-content-center">
        <div className={streetInputClasses + " mr-2"}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            onChange={streetChangedHandler}
            onBlur={streetBlurHandler}
            value={userStreet}
          />
          {streetInputHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>

        <div className={suiteInputClasses}>
          <label htmlFor="suite">Suite</label>
          <input
            type="text"
            id="suite"
            onChange={suitChangedHandler}
            onBlur={suitBlurHandler}
            value={enteredEmail}
          />
          {suitInputHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className={cityInputClasses + " mr-2"}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            onChange={cityChangedHandler}
            onBlur={cityBlurHandler}
            value={userCity}
          />
          {cityInputHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>

        <div className={zipCodeInputClasses}>
          <label htmlFor="email">zipCode</label>
          <input
            type="number"
            id="zipCode"
            onChange={zipCodeChangeHandler}
            onBlur={zipCodeBlurHandler}
            value={userZipCode}
          />
          {zipCodeInputHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>
      </div>

      <h4>Geo</h4>
      <div className="d-flex justify-content-center">
        <div className={latInputClasses + " mr-2"}>
          <label htmlFor="lat">Lat</label>
          <input
            type="number"
            id="lat"
            onChange={latChangeHandler}
            onBlur={latBlurHandler}
            value={userLat}
          />
          {latInputHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>

        <div className={longInputClasses}>
          <label htmlFor="long">Long</label>
          <input
            type="number"
            id="long"
            onChange={longChangeHandler}
            onBlur={longBlurHandler}
            value={userLong}
          />
          {longInputHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className={phoneInputClasses + " mr-2"}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tell"
            id="phone"
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
            value={userPhone}
          />
          {phoneInputHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>

        <div className={websiteInputClasses}>
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            onChange={websiteChangeHandler}
            onBlur={websiteBlurHandler}
            value={userWebsite}
          />
          {websiteInputHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>
      </div>

      <div className="form-actions">
        <button type="" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddUser;
