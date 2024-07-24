// src/routes/AdminRoutes.js
import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";

export const AdminPrivateRoute = ({ children }) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkRole = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const unsubscribe = onSnapshot(userDocRef, (doc) => {
          if (doc.exists()) {
            const userData = doc.data();
            setRole(userData.roles);
            setLoading(false);
          } else {
            navigate("/login");
          }
        });

        return () => unsubscribe();
      } else {
        navigate("/login");
      }
    };

    checkRole();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return role === "admin" ? children : <Navigate to="/" />;
};
