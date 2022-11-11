import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import usersAvatarExampleImg from '../assets/users-avatar.png'
import iconCheckImg from '../assets/icon-check.png'
import logoImg from '../assets/logo.svg'


export default function Home() {
  return (
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center'>
      <main>
        <Image src={logoImg} alt='' />
        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>Crie seu próprio bolão da copa e compartilha com amigos!</h1> 
        <div className='mt-10 flex items-center gap-2'>
           <Image src={usersAvatarExampleImg} alt='' />
           <strong className='text-gray-100'>
              <span className='text-ignite-500'>+12.592</span> pessoas já usam
           </strong>
        </div>

        <form className='mt-10 flex'>
          <input className='flex-1 px-6 py-4 rounded' type='text' required placeholder='Qual o nome do seu bolão' />
          <button type='submit' className='bg-yellow-500'>Criar meu bolão</button>
        </form>

        <p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>
      
        <div>
          <div>
            <Image src={iconCheckImg} alt='' />
            <div>
              <span>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div>
             <Image src={iconCheckImg} alt='' />
            <div>
              <span>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
        </div>
      </main>
      <Image 
      src={appPreviewImg} 
      alt='' quality={100}/> 
    </div>
  )
}
