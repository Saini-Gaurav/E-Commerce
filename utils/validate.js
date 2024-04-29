export const checkValidData = (name, email, password, isSignInForm) => {
    // Check if it's a sign-up form and validate the name
    if (!isSignInForm) {
      const isNameValid = /^[A-Za-z]{3,16} [A-Za-z]{3,16}$/.test(name);
      if (!isNameValid) {
        return "Name is not valid";
      }
    }
  
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    if (!isEmailValid) {
      return "Email ID is not valid";
    }
    if (!isPasswordValid) {
      return "Password is not valid";
    }
  
    return null;
  };
  