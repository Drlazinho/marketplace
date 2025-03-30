import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Check, X, Tag, Ban } from "lucide-react";
import { CustomButton } from "@/components/custom-button";
import CustomSelect from "@/components/custom-select";

export default function EditProduct() {
  return (
    <div className="container mx-auto mt-10">
      {/* Cabeçalho */}
      <div className="flex items-center text-orange-base cursor-pointer mb-2">
        <ArrowLeft size={20} />
        <span className="ml-2 font-medium">Voltar</span>
      </div>
      <div className="flex justify-between mb-8">
        <div>
          <h1 className="text-title-md font-bold text-grayscale-500">
            Editar produto
          </h1>
          <p className="text-grayscale-300 text-body-sm mt-1">
            Acesse gerencie a sua lista de produtos à venda
          </p>
        </div>
        <div className="flex justify-between items-end gap-6 text-orange-base">
          <button className="flex items-center gap-1  text-nowrap">
            <Check size={20} /> Marcar como vendido
          </button>
          <button className="flex items-center gap-1  text-nowrap">
            <Ban size={20} /> Desativar anúncio
          </button>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Imagem do Produto */}
        <div>
          <img
            src="https://static.mobly.com.br/p/Modern-SofC3A1-3-Lugares-Nevada-I-Suede-Bege-5637-661847-2.jpg"
            alt="Sofá"
            width={400}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Formulário de Edição */}
        <div className="bg-white col-span-2 p-6 rounded-xl  h-min">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-title-sm font-semibold text-grayscale-300">
              Dados do produto
            </h2>
            <Badge className="bg-blue-500 text-white">ANUNCIADO</Badge>
          </div>

          {/* Campos do Formulário */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-grayscale-300">TÍTULO</label>
              <Input noIcon />
            </div>
            <div>
              <label className="text-xs text-grayscale-300">VALOR</label>
              <Input noIcon className="text-red-500 font-semibold" />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-xs text-gray-500">DESCRIÇÃO</label>
            <Textarea
              className="border-none border-b-2 border-b-red-300 p-0"
              defaultValue="Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado."
            />
          </div>

          {/* Select de Categoria */}
          <div className="mb-4">
            <CustomSelect
              label="CATEGORIA"
              options={[
                { value: "movel", label: "Móvel" },
                { value: "decoracao", label: "Decoração" },
                { value: "eletro", label: "Eletrodoméstico" },
              ]}
            />
          </div>

          {/* Botões de Ação */}

          <div className="flex justify-between">
            <CustomButton
              variant="outline"
              className="w-1/2 mr-2 text-orange-base"
            >
              Cancelar
            </CustomButton>
            <CustomButton className="w-1/2 ">Salvar e atualizar</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
