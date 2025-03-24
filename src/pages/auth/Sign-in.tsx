import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import mail from "@/assets/icon/mail-02.svg";
import access from "@/assets/icon/access.svg";
import { CustomButton } from '@/components/custom-button'
import { MoveRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function SignIn() {
  const navigate = useNavigate()

  function goSignUp() {
    navigate('/sign-up')
  }

  return (
    <>
      <Helmet title="Sign-in" />
      <form
        action=""
        className="bg-shape-white h-4/5 px-20 py-16 mt-10 m-6 rounded-3xl flex flex-col"
      >
        <div>
          <h1 className="text-title-md font-bold">Acesse sua conta</h1>
          <p className="text-body-sm font-regular text-grayscale-300">
            Informe seu e-mail e senha para entrar
          </p>
        </div>
        <div className='flex-grow'>

        <Input
          label="E-mail"
          icon={<img src={mail} width={24} />}
          placeholder="Seu e-mail cadastrado"
          type='email'
          defaultValue="Text"
          filled
          className='mt-10 mb-4'
        />
        <Input
          label="senha"
          icon={<img src={access} width={24} />}
          type="password"
          placeholder="Sua senha de acesso"
          defaultValue="Text"
          filled
        />
          <CustomButton endIcon={<MoveRight />} className='bg-orange-base mt-10'>Acessar</CustomButton>
          </div>

        <div className='flex flex-col'>
          <p className='mb-2'>Ainda não tem uma conta?</p>
          <CustomButton endIcon={<MoveRight />} variant='outline' className='text-orange-base' onClick={goSignUp}>Cadastrar</CustomButton>
        </div>
      </form>
    </>
  );
}
