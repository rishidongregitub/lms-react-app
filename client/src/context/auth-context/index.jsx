import { initialSignInFormData, initialSignUpFormData } from "@/config";
import PropTypes from "prop-types"; // Import PropTypes
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Define PropTypes for AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is required and is a node
};
