import React from 'react';
import Header from '../../app/header'
import styles from './home.module.css'
import backgroundImg from '..'

const Inicial = () => {
    return (
      <div>
        <Header />
        <div className={styles.background}>
            <img className={styles.backgroundImage} src="/images/grafismo.png" alt="Grafismo Nema" />
            <div className={styles.textContainer}>
            <div className={styles.textSection}>
                <h2 className={styles.h2}>
                    Sobre nós
                </h2>
                <p className={styles.p}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit veniam, explicabo autem, eius minus distinctio necessitatibus rem aut vel facere enim, officia esse ullam suscipit reiciendis possimus natus ea.
                </p>
            </div>
            <div className={styles.textSection}>
                <h2 className={styles.h2}>
                    Equipe
                </h2>
                <p className={styles.p}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aliquam dolorem, illum minima quae quis autem, similique impedit fuga incidunt consequatur quo nostrum esse aspernatur? Voluptatibus illum quaerat ut quidem?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aliquam dolorem, illum minima quae quis autem, similique impedit fuga incidunt consequatur quo nostrum esse aspernatur? Voluptatibus illum quaerat ut quidem?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aliquam dolorem, illum minima quae quis autem, similique impedit fuga incidunt consequatur quo nostrum esse aspernatur? Voluptatibus illum quaerat ut quidem?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aliquam dolorem, illum minima quae quis autem, similique impedit fuga incidunt consequatur quo nostrum esse aspernatur? Voluptatibus illum quaerat ut quidem?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aliquam dolorem, illum minima quae quis autem, similique impedit fuga incidunt consequatur quo nostrum esse aspernatur? Voluptatibus illum quaerat ut quidem?
                </p>
            </div>
            <div className={styles.textSection}>
                <h2 className={styles.h2}>
                    Áreas de pesquisa
                </h2>
              <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusantium odio, similique illum voluptas, quasi hic assumenda omnis harum ab iste tempore nostrum qui aliquid repellendus? Autem fuga dolores nostrum.</p>
            </div>
            <div className={styles.textSection}>
              <h2 className={styles.h2}>Visão geral</h2>
              <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa commodi perspiciatis voluptate impedit qui aliquam laboriosam eius temporibus. Dolorem non quia, error autem vero qui illo tenetur ullam rem.</p>
            </div>
            </div>
        </div>
      </div>
    );
  };
  

export default Inicial;