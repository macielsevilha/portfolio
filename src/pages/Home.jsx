
import styles from '../styles/pages/Home.module.scss';

import perfil from '../perfil.png';
const Home = () => {
   return (
   <div className={styles.bgHome}>
     <section className={styles.home}>
      <div className={styles.content}>
        <h2 className={styles.title}>Title da aplication</h2>
        <p className={styles}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem id iusto accusantium fugit cum! Id doloremque, perferendis minus sint dignissimos accusantium sapiente sed natus accusamus nesciunt quis voluptate libero rerum!</p>
  
     
      
      </div>
      <div className={styles.image}>
         <img src={perfil} alt="" />
      </div>
    
    </section>
   </div>
   )
}

export default Home;
