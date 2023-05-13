import Image from 'next/image'
import AuthForm from './components/AuthForm'

export default function Home() {
  return (
    <main>
      <div className='flex bg-grey-100 min-h-screen flex-col justify-center'>
        <AuthForm />
      </div>
    </main>
  )
}
