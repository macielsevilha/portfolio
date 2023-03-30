import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import { Button } from './components/_ui/Buttons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='flex justify-center bg-white py-10'>
        <div className='xl:w-7/12 lg:w-8/12 md:w-10/12 w-11/12'>
          <h1 className='font-black text-danger'>I call Maciel</h1>
          <h2 className='font-semibold'>Web developer</h2>
          <p>I've always liked programming since I was 18 years old and I can't leave my coffee aside because without it my code won't compile, just kidding the parts to get to know me just look at an icon or to hire me click on the button you can find right below !</p>
          <div className='md:flex justify-center'>
            <img className='rounded-full mt-5' src="minha.png" alt="" width={400} height={400} />
            <div className='md:flex items-end justify-end text-center mt-5'>
              <Button name="clique aqui"/>
            </div>
          </div>
        </div>
        
      </div>
      <div className='flex justify-center'>
       <div className='xl:w-7/12 lg:w-8/12 md:w-10/12 w-11/12'>
       <h2 className='font-black text-center mt-10 mb-5'>Minhas habilidades</h2>
        <div className="md:grid grid-cols-3 gap-4">
          <div className=''>
            <h3>Técnico em informática</h3>
            <span>2018 - 2022</span>
          </div>
          <div className='flex col-span-2'>
            <div className='mr-10 flex justify-center relative'>
              <i className="fa fa-coffee text-3xl"></i>
              <span className={styles.line}></span>
            </div>
           <div className='mb-5'>
            <h4>Freelencer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo ab aliquam, fuga, laudantium magnam quos aut reprehenderit, praesentium eveniet molestias consequatur. Nulla sed laborum omnis illo minus, similique tempore.</p>
           </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3 gap-4">
          <div className=''>
            <h3>Técnico em informática</h3>
            <span>2018 - 2022</span>
          </div>
          <div className='flex col-span-2'>
            <div className='mr-10 flex justify-center relative'>
              <i className="fa fa-coffee text-3xl"></i>
              <span className={styles.line}>
                
              </span>
            </div>
           <div className='mb-5'>
            <h4>Freelencer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo ab aliquam, fuga, laudantium magnam quos aut reprehenderit, praesentium eveniet molestias consequatur. Nulla sed laborum omnis illo minus, similique tempore.</p>
           </div>
          </div>
        </div>
       </div>
      </div>
    </main>
  )
}
