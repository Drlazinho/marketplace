import { Button } from "@/components/ui/button";
import logo from "../../assets/logo.svg";
import { NavLink, Outlet } from "react-router-dom";
import { ChartNoAxesCombined, Package, Plus } from "lucide-react";
import { CustomButton } from "@/components/custom-button";

export function AppLayout() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-shape-background">
      <div className="h-20 p-4 flex flex-row justify-between items-center border-b-shape-shape border-2">
        <img src={logo} alt=""  width={80}/>{" "}
        <div className="flex flex-row gap-4">
          <NavLink to={"/"}>
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
          <CustomButton startIcon={<Plus />}>Novo Produto</CustomButton>
          <img src={logo} width={60} height={60} />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
