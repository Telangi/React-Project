import React, {createContext,useState} from "react";

export const AuthContext =createContext();

const AuthContextProvider = ({ children,}) => {

  const [
    isAuthenticated,
    setIsAuthenticated,
  ] = useState(
    localStorage.getItem(
      "isAuthenticated"
    ) === "true"
  );

  /* SIGNUP */
  const signup = (
    name,
    email,
    password
  ) => {

    const existingUser =
      JSON.parse(
        localStorage.getItem("user")
      );

    if (
      existingUser &&
      existingUser.email === email
    ) {

      return false;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    return true;
  };

  /* LOGIN */
  const login = (
    email,
    password
  ) => {

    const user =
      JSON.parse(
        localStorage.getItem("user")
      );

    if (
      user?.email === email &&
      user?.password === password
    ) {

      localStorage.setItem(
        "isAuthenticated",
        "true"
      );

      setIsAuthenticated(true);

      return true;
    }

    return false;
  };

  /* LOGOUT */
  const logout = () => {

    localStorage.removeItem(
      "isAuthenticated"
    );

    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;