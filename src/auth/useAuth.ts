import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!sessionStorage.getItem("auth");
  });

  console.log('checkando')
  useEffect(() => {
    const checkAuth = () => {
      const token = sessionStorage.getItem("auth");
      setIsAuthenticated(!!token);
    };

    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  return { isAuthenticated };
}
