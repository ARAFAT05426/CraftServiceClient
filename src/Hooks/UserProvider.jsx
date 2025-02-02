import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import UserContext from "./UserContext";
import auth from "../Config/Firebase.config";
import axios from "axios";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  // Function to create a user with email and password
  const createUser = (mail, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, mail, pass);
  };

  // Function to sign in user with Google
  const signUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Function to sign in user with Github
  const signUserWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // Function to update user profile
  const updateUser = (name, url) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    })
      .then(() => {
        setLoading(false);
        return setUser({ ...auth.currentUser });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Function to sign in user with email and password
  const signUser = (mail, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, mail, pass);
  };

  // Function to sign out user
  const signOutUSer = async () => {
    setLoading(true);
    setUser(null);
    await axios.get(`${import.meta.env.VITE_API}/logOut`, {withCredentials: true});
    return signOut(auth);
  };

  // Data object to be passed to context provider
  const values = {
    name: "khan",
    user,
    loading,
    createUser,
    updateUser,
    signUser,
    signUserWithGoogle,
    signOutUSer,
    signUserWithGithub,
  };

  // Effect to handle user authentication state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      if (currentUser) {
        try {
          await axios.post(
            `${import.meta.env.VITE_API}/token`,
            {
              email: currentUser.email,
            },
            { withCredentials: true }
          );
        } catch (error) {
          console.error("Error posting user email to '/token' route:", error);
        }
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

// Prop types for UserProvider component
UserProvider.propTypes = {
  children: PropTypes.node,
};

export default UserProvider;
