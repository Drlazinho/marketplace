import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft} from "lucide-react";
import { CustomButton } from "@/components/custom-button";
import CustomSelect from "@/components/custom-select";
import FileInput from '@/components/file-input'

export default function NewProduct() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between mb-8">
        <div>
          <h1 className="text-title-md font-bold text-grayscale-500">
            Novo produto
          </h1>
          <p className="text-grayscale-300 text-body-sm mt-1">
          Cadastre um produto para venda no marketplace          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Imagem do Produto */}
        <div>
            <FileInput className='w-[100%] h-[350px]'/>
   
        </div>

        {/* Formulário de Edição */}
        <div className="bg-white col-span-2 p-6 rounded-xl  h-min">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-title-sm font-semibold text-grayscale-300">
              Dados do produto
            </h2>
          </div>

          {/* Campos do Formulário */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-grayscale-300">TÍTULO</label>
              <Input noIcon/>
            </div>
            <div>
              <label className="text-xs text-grayscale-300">VALOR</label>
              <Input
                className="text-red-500 font-semibold"
                noIcon
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-xs text-gray-500">DESCRIÇÃO</label>
            <Textarea
              className="border-none border-b-2 border-b-red-300 p-0"
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
