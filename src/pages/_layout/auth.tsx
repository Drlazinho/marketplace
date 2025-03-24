import logo from "../../assets/logo.svg";
import banner from '../../assets/bg_login.png'
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen w-full grid grid-cols-3 bg-shape-background">
      <div className="h-full col-span-2">
        <div className="flex flex-row items-center ml-10 mt-10 mb-14" role='header'>
          <img src={logo} alt="" />
          <div className="flex flex-col ml-5">
            <h1
              className="text-title-md font-bold 
                leading-snug
                 text-grayscale-400"
            >
              Marketplace
            </h1>
            <p className="text-body-md text-grayscale-400 leading-tight">
              Painel de Vendedor
            </p>
          </div>
        </div>
        <div className='m-auto'>
            <img src={banner} alt="" />
        </div>
      </div>
      <div className='col-span-1 antialiased'>
        <Outlet />
      </div>
    </div>
  );
}
