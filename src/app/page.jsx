"use client";

import './sass/app.scss';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import { Button } from './components/_ui/Buttons'
import {BsFillMortarboardFill, BsHouseDoorFill} from 'react-icons/bs'
import { H1, H2, H3, H4, P1 } from './components/_ui/Titles';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
       <div className='xl:w-7/12 lg:w-8/12 md:w-10/12 w-11/12'>
        <div className='py-10'>
          <H1 name="I call Maciel" />
          <H2 name="web developer" />
          <p className='portfolio-title--bs'>I've always liked programming since I was 18 years old and I can't leave my coffee aside because without it my code won't compile, just kidding the parts to get to know me just look at an icon or to hire me click on the button you can find right below !"</p>
          <div className='flex justify-center'>
            <Image className='rounded-full mt-5 md:w-[350px] xs:w-[300px]' src="/minha.png" alt="" width={250} height={250} />
          </div>
          <div className='md:flex items-end justify-end text-center mt-5'>
              <Button name="clique aqui"/>
            </div>
        </div>

       <h2 className='text-center mt-10 mb-5 portfolio-title--lg'>My skill</h2>
        <div className="md:grid grid-cols-3 gap-4">
          <div className=''>
            <H3 name="Técnico em informática" />
            <span>2018 - 2022</span>
          </div>
          <div className='flex col-span-2'>
            <div className='mr-10 portfolio-skill--icon'>
             <span></span>
              <BsFillMortarboardFill/>
            </div>
           <div className='mb-5'>
           <H4 name="Escola CETEP" />
            <p className='portfolio-title--xs'>finalizei o curso de técnico em informática na escola Cetep, localizado em Santa Maria Da Vitória, principal conteúdo manutencação de computador e redes, estudou banco de dados e progamação web básico.</p>
           </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3 gap-4">
          <div className=''>
            <h3 className='portfolio-title--md'>Trabalhou como Freelencer</h3>
            <span>2018 - 2022</span>
          </div>
          <div className='flex col-span-2'>
            <div className='mr-10 portfolio-skill--icon'>
             <span></span>
             <BsHouseDoorFill />
            </div>
           <div className='mb-5'>
            <h4 className='portfolio-title--bs'>Empresa Freelencer</h4>
            <p className='portfolio-title--xs'>Atualmente trabalho com Freelencer, já criei vários projeto web e sistema, começei como Freelencer em 2020 e tenho 2 anos de experiência profissional no mundo do mercado web.</p>
           </div>
          </div>
        </div>
        <hr />
       </div>
    </main>
  )
}