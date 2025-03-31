import logo from "../../assets/logo.svg";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { ChartNoAxesCombined, Package, Plus } from "lucide-react";
import { CustomButton } from "@/components/custom-button";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { isAxiosError } from "axios";

export function AppLayout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("auth");
    if (!token) {
      navigate("/sign-in", { replace: true });
      return;
    }

    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status;
          const code = error.response?.data.code;

          if (status === 401 && code === "UNAUTHORIZED") {
            console.log('esta passando aqui, falha')
            sessionStorage.removeItem("auth");
            navigate("/sign-in", { replace: true });
          }
        }
        return Promise.reject(error);
      }
    );

    setIsLoading(false); // Libera a interface após a verificação

    return () => {
      api.interceptors.response.eject(interceptorId);
    };
  }, [navigate]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-shape-background">
      <div className="h-20 p-4 flex flex-row justify-between items-center border-b-shape-shape border-2">
        <img src={logo} alt="" width={80} />
        <div className="flex flex-row gap-4">
          <NavLink to={"/dashboard"}>
            <div className="flex flex-row gap-2">
              <ChartNoAxesCombined /> Dashboard
            </div>
          </NavLink>
          <NavLink to={"/products"}>
            <div className="flex flex-row gap-2">
              <Package /> Produtos
            </div>
          </NavLink>
        </div>
        <div className="flex flex-row gap-4">
          <Link to={"/newproduct"}>
            <CustomButton startIcon={<Plus />}>Novo Produto</CustomButton>
          </Link>
          <CustomButton variant="outline" onClick={() => handleLogout()}>
            Sair
          </CustomButton>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );

  function handleLogout() {
    sessionStorage.removeItem("auth"); // Remove o token
    navigate("/sign-in", { replace: true });
  }
}
