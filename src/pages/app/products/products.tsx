import { Helmet } from "react-helmet-async";
import ProductCard from "./card-product";
import { Input } from "@/components/ui/input";
import search from "../../../assets/icon/search-01.svg";
import sales from "../../../assets/icon/sale-tag-02.svg";
import { CustomButton } from "@/components/custom-button";
import CustomSelect from "@/components/custom-select";
import { Tag } from "lucide-react";

export function Products() {
  return (
    <>
      <Helmet title="Products" />
      <div className="container mx-auto mt-10">
        <h1 className="text-title-md font-bold text-grayscale-500">
          Seus produtos
        </h1>
        <p className="text-grayscale-300 text-body-sm mt-1">
          Acesse gerencie a sua lista de produtos à venda
        </p>
        <div className="grid grid-cols-4 gap-4 mt-10">
          <div>
            <form
              action=""
              className="bg-shape-white  p-8 rounded-3xl flex flex-col"
            >
              <h1 className="text-title-sm font-bold text-grayscale-300">
                Filtro
              </h1>

              <div>
                <Input
                  icon={<img src={search} width={24} />}
                  placeholder="Pesquisar"
                  type="email"
                  filled
                  className="mt-10 mb-4"
                />
          
                <CustomSelect
                  label="Status"
                  icon={Tag}
                  options={[
                    { value: "anunciado", label: "Anunciado" },
                    { value: "vendido", label: "Vendido" },
                    { value: "desativado", label: "Desativado" },
                  ]}
                />

                <CustomButton className="bg-orange-base mt-10">
                  Aplicar Filtro
                </CustomButton>
              </div>
            </form>
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-4">
            <ProductCard
              price="1.200,90"
              title="sofá"
              status="anunciado"
              description="Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado."
              tag="móvel"
              image="https://static.mobly.com.br/p/Modern-SofC3A1-3-Lugares-Nevada-I-Suede-Bege-5637-661847-2.jpg"
            />
            <ProductCard
              price="1.200,90"
              title="sofá"
              status="anunciado"
              description="Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado."
              tag="móvel"
              image="https://static.mobly.com.br/p/Modern-SofC3A1-3-Lugares-Nevada-I-Suede-Bege-5637-661847-2.jpg"
            />
            <ProductCard
              price="1.200,90"
              title="sofá"
              status="anunciado"
              description="Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado."
              tag="móvel"
              image="https://static.mobly.com.br/p/Modern-SofC3A1-3-Lugares-Nevada-I-Suede-Bege-5637-661847-2.jpg"
            />
            <ProductCard
              price="1.200,90"
              title="sofá"
              status="anunciado"
              description="Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado."
              tag="móvel"
              image="https://static.mobly.com.br/p/Modern-SofC3A1-3-Lugares-Nevada-I-Suede-Bege-5637-661847-2.jpg"
            />
            <ProductCard
              price="1.200,90"
              title="sofá"
              status="anunciado"
              description="Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado."
              tag="móvel"
              image="https://static.mobly.com.br/p/Modern-SofC3A1-3-Lugares-Nevada-I-Suede-Bege-5637-661847-2.jpg"
            />
            <ProductCard
              price="1.200,90"
              title="sofá"
              status="anunciado"
              description="Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado."
              tag="móvel"
              image="https://static.mobly.com.br/p/Modern-SofC3A1-3-Lugares-Nevada-I-Suede-Bege-5637-661847-2.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
