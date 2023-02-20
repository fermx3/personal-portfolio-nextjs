import React from 'react';
import Icon from '../../images/icon';
import SkillCard from './skill-card';

import classes from './skills-section.module.css';

const SkillsSection = () => {
  return (
    <section className={classes.skills}>
      <SkillCard
        src='/images/icons/idea.svg'
        titulo='Solucionador de problemas'
        p1='Me gusta investigar y encontrar la causa raíz de cualquier problema
          antes de proponer soluciones efectivas y prácticas.'
        p2='Además, estoy siempre aprendiendo y mejorando mis habilidades para
          poder ofrecer soluciones innovadoras y creativas.'
      />
      <SkillCard
        src='/images/icons/lenguajes-js.svg'
        titulo='Lenguajes de programación'
        p1='Tengo experiencia en HTML, CSS y JavaScript, lo que me permite
            diseñar interfaces de usuario atractivas y personalizadas.'
        p2='Siempre estoy actualizado con las últimas tendencias y
            características en estos lenguajes para ofrecer soluciones web de
            alta calidad y rendimiento.'
      />
      <SkillCard
        src='/images/icons/frameworks-react.svg'
        titulo='Frameworks y Bibliotecas'
        p1='Soy experto en el uso de frameworks y bibliotecas populares como
          Next.js, React.js y WordPress, lo que me permite crear soluciones web
          escalables y personalizadas para mis clientes.'
        p2='Además, siempre estoy actualizado con las últimas tendencias
          tecnológicas para mejorar mi habilidad y brindar soluciones de alta
          calidad.'
      />
    </section>
  );
};

export default SkillsSection;
