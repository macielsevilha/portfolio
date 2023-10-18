"use client";

import './sass/app.scss';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import { Button } from './components/_ui/Buttons'
import {BsFillMortarboardFill, BsBriefcaseFill, BsFillEnvelopeAtFill, BsFillCupHotFill} from 'react-icons/bs'
import { H1, H2, H3, H4, P1 } from './components/_ui/Titles';
import { useEffect, useRef } from 'react';

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
           <div className="portfolio-box--rotator">
              <div className="portfolio-box--content">
                <img src="./minha.png" alt="" />
              </div>
           </div>
          </div>
          <div className='md:flex items-end justify-end text-center mt-5'>
              <div className='flex items-center flex-col md:flex-row'> 
               <Button btn="btn-primary" name="visualizar CV"/>
              </div>
            </div>
        </div>

       <h2 className='text-center mt-10 mb-5 portfolio-title--lg'>My skill</h2>

       <div className="md:grid grid-cols-3 gap-4">
          <div className=''>
            <H3 name="Web Moderno" />
            <span className='portfolio-title--xs'>fevereiro 2020 - dezembro 2022</span>
          </div>
          <div className='flex col-span-2'>
            <div className='mr-10 portfolio-skill--icon'>
             <span></span>
             <div className='portfolio-skill--icon-item' > <BsFillMortarboardFill /></div>
           
            </div>
           <div className='mb-5'>
           <H4 name="Curso com JavaScript + Projetos" />
            <p className='portfolio-title--xs'>Completo com Java Script 2022 + projetos, aprendeu Javascript, Html, a Css, Scss, Node, ESNext, Ajax, Gulp, Webpack, JQuery, Bootstrap, React, VueJS, Angular 9, Banco Relacional, Banco não Relacional e Express.</p>
           </div>
          </div>
        </div>

        <div className="md:grid grid-cols-3 gap-4">
          <div className=''>
            <h3 className='portfolio-title--md'>Developer</h3>
            <span className='portfolio-title--xs'>Janeiro 2020 - presente</span>
          </div>
          <div className='flex col-span-2'>
            <div className='mr-10 portfolio-skill--icon'>
             <span></span>
             <div className='portfolio-skill--icon-item' ><BsBriefcaseFill/></div>
            </div>
           <div className='mb-5'>
            <h4 className='portfolio-title--bs'>Empresa Freelencer</h4>
            <p className='portfolio-title--xs'>De forma independente é densevolvedor de site, desde o início do projeto até a conclusão, realizou projeto em ambas parte back-end e front-end, utilizando linguagens forte no mercado sempre trabalhando com metodologias ágeis.</p>
           </div>
          </div>
        </div>

        <div className="md:grid grid-cols-3 gap-4">
          <div className=''>
            <H3 name="SENAC" />
            <span className='portfolio-title--xs'>junho 2022 - setembro 2022</span>
          </div>
          <div className='flex col-span-2'>
            <div className='mr-10 portfolio-skill--icon'>
             <span></span>
             <div className='portfolio-skill--icon-item' > <BsFillMortarboardFill /></div>
           
            </div>
           <div className='mb-5'>
           <H4 name="Administrador de Banco de Dados" />
            <p className='portfolio-title--xs'>Aprendeu HTML, a CSS, MYSQL, SQL e PHP. Instalou e configurou o sistema de banco de dados, realizou o monitoramento do uso e desempenho dos sistemas de banco de dados, manutenção e otiminização dos bancos de dados e concluíu o Projeto integrador Administrador de Banco de Dados.</p>
           </div>
          </div>
        </div>

        <div className="md:grid grid-cols-3 gap-4">
          <div className=''>
            <H3 name="CETEP" />
            <span className='portfolio-title--xs'>fevereiro 2020 - dezembro 2022</span>
          </div>
          <div className='flex col-span-2'>
            <div className='mr-10 portfolio-skill--icon'>
             <span></span>
             <div className='portfolio-skill--icon-item' > <BsFillMortarboardFill /></div>
            </div>
           <div className='mb-5'>
           <H4 name="Técnico em Informática" />
            <p className='portfolio-title--xs'>Localizado em Santa Maria Da Vitória, aprendeu lógica e Linguagens de Programação, Sistemas Operacionais, Interpretação de Especificações de Sistemas Computacionais, Banco de Dados, Sistema Operacional, Configuração e Instalação de Redes, Analista de Suporte Técnico, Manutenção de Computadores.</p>
           </div>
          </div>
        </div>
        <hr />

        <div className='portfolio-curriculum'>
           <button> <span> <i><BsFillEnvelopeAtFill /></i> Enviar uma Mensagem</span></button>
           <button> <span> <i> <BsFillCupHotFill /> </i>ver currículo </span> </button>
        </div>
       </div>
      
    </main>
  )
}