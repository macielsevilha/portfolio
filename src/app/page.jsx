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
          <H1 name="Olá me chamo Maciel" />
          <H2 name="desenvolvedor web" />
          <p className='portfolio-title--bs'>teve inicio há mais de 3 anos estundando programação web em ambas parte back-end e front-end, comecou seu primeiro projeto profissional em 2022 como desenvolvedor Freelencer, atualmente tenho 20 anos de idade.</p>
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
            <H3 name="CETEP" />
            <span className='portfolio-title--xs'>fevereiro 2020 - dezembro 2022</span>
          </div>
          <div className='flex col-span-2'>
            <div className='mr-10 portfolio-skill--icon'>
             <span></span>
              <BsFillMortarboardFill/>
            </div>
           <div className='mb-5'>
           <H4 name="Técnico em informática" />
            <p className='portfolio-title--xs'>Localizado em Santa Maria Da Vitória, realizei ás principais atividade criação de site HTML, CSS, PHP, MYSQL e manutenção de computador.</p>
           </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3 gap-4">
          <div className=''>
            <h3 className='portfolio-title--md'>Developer</h3>
            <span className='portfolio-title--xs'>2020 - presente</span>
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