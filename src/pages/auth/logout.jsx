import { useEffect } from "react";
import { useNavigate } from 'react-router'

const Logout = () => {
  const router = useNavigate();

  useEffect(() => {
    const logout = async () => {
      await localStorage.removeItem("accessToken");
      await localStorage.removeItem("userId");

      setTimeout(() => {
        router("/auth/login");
      }, 1000);
    };

    logout();
  }, [router]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default Logout;
