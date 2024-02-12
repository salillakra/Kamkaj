import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { app } from "@/Firebase/Firebase";

const HomePage = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  useEffect(() => {
    // Check if user is signed in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // No user is signed in
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="w-full bg-gray-800 text-white py-4 flex justify-between items-center">
        <div className="ml-4">
          <h1 className="text-lg font-bold">
            Welcome, {user ? user.displayName : "Guest"}
          </h1>
        </div>
        {user && (
          <div className="mr-4">
            <button className="text-white" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </header>
      <main className="flex flex-col items-center justify-center flex-1">
        {user && (
          <div className="p-8 bg-white shadow-md rounded-lg">
            <img
              className="w-24 h-24 rounded-full mx-auto"
              src={user.photoURL}
              alt="User Profile"
            />
            <h2 className="text-lg font-semibold mt-4">{user.displayName}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        )}
        {!user && (
          <p className="text-lg text-gray-600 mt-4">
            Please sign in to view your profile.
          </p>
        )}
      </main>
    </div>
  );
};

export default HomePage;
