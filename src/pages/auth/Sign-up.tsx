import { CustomButton } from "@/components/custom-button";
import { Input } from "@/components/ui/input";
import { MoveRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import mail from "@/assets/icon/mail-02.svg";
import access from "@/assets/icon/access.svg";
import user from "@/assets/icon/user.svg";
import call from "@/assets/icon/call.svg";
import { useNavigate } from 'react-router-dom'
import FileInput from '@/components/file-input'

export function SignUp() {
   const navigate = useNavigate()
  
    function goSignIn() {
      navigate('/sign-in')
    }
  

  return (
    <>
      <Helmet title="Sign-up" />
      <form
        action=""
        className="bg-shape-white h-[90vh] px-20 py-16 mt-10 m-6 rounded-3xl flex flex-col overflow-y-scroll"
      >
        <div className="mb-4">
          <h1 className="text-title-md font-bold">Crie sua conta</h1>
          <p className="text-body-sm font-regular text-grayscale-300">
            Informe os seus dados pessoais e de acesso
          </p>
        </div>

        <div className="flex-grow">
          <p className="text-title-sm font-semibold">Perfil</p>

          <FileInput />

          <Input
            label="Nome"
            icon={<img src={user} width={24} />}
            placeholder="Seu nome completo"
            type="text"
            filled
            className="mt-10 mb-4"
          />
          <Input
            label="Telefone"
            icon={<img src={call} width={24} />}
            type="number"
            placeholder="(00) 00000-0000"
            filled
          />

          <p className="text-title-sm font-semibold mt-8">Acesso</p>
          <Input
            label="E-mail"
            icon={<img src={mail} width={24} />}
            placeholder="Seu e-mail cadastrado"
            type="email"
            filled
            className="mb-4"
          />
          <Input
            label="senha"
            icon={<img src={access} width={24} />}
            type="password"
            placeholder="Sua senha de acesso"
            filled
            className="mb-4"
          />
          <Input
            label="confirmar senha"
            icon={<img src={access} width={24} />}
            type="password"
            placeholder="Confirme a senha"
            filled
            className="mb-4"
          />
          <CustomButton
            endIcon={<MoveRight />}
            className="bg-orange-base mt-10"
          >
            Cadastrar
          </CustomButton>
        </div>

        <div className="flex flex-col mt-10">
          <p className="mb-2">Já tem uma conta??</p>
          <CustomButton
            endIcon={<MoveRight />}
            variant="outline"
            className="text-orange-base"
            onClick={goSignIn}
          >
            Acessar
          </CustomButton>
        </div>
      </form>
    </>
  );
}
