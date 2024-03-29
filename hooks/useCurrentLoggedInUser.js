import { useEffect } from "react";
import { useState } from "react";
import { auth, db } from "../firebase";

const useCurrentLoggedInUser = () => {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState({
    isAdmin: false,
  });

  const getUserDetails = () => {
    const user = auth.currentUser;
    const unsubscribe = db
      .collection("users")
      .where("owner_uid", "==", user.uid)
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => {
          setCurrentLoggedInUser({
            uid: doc.data().uid,
            name: doc.data().name,
            email: doc.data().email,
          });
        })
      );

    return unsubscribe;
  };

  useEffect(() => getUserDetails(), []);
  return currentLoggedInUser;
};

export default useCurrentLoggedInUser;
