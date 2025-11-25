import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface DecodedToken {
  sub: string;
  exp: number;
  [key: string]: any;
}

export default function useAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useState<DecodedToken | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decoded: DecodedToken = jwtDecode(token); 
      setUser(decoded);
    }
  }, []);

  const login = (accessToken: string, refreshToken: string) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    const decoded: DecodedToken = jwtDecode(accessToken); 
    setUser(decoded);
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
    navigate("/login");
  };

  return { user, login, logout };
}
