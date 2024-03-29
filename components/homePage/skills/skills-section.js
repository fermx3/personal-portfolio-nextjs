import Section from '@/components/layout/section';
import SkillItem from './skill-item';

import classes from './skills-section.module.css';

const SkillsSection = () => {
  return (
    <Section id='skills'>
      <div className={classes.skills}>
        <SkillItem
          src='/images/icons/idea.svg'
          titulo='Solucionador de problemas'
          p1='Me gusta investigar y encontrar la causa raíz de cualquier problema
          antes de proponer soluciones efectivas y prácticas.'
          p2='Además, estoy siempre aprendiendo y mejorando mis habilidades para
          poder ofrecer soluciones innovadoras y creativas.'
          whiteOnDarkTheme
        />
        <SkillItem
          src='/images/icons/lenguajes-js.svg'
          titulo='Lenguajes de programación'
          p1='Tengo experiencia en HTML, CSS y JavaScript, lo que me permite
            diseñar interfaces de usuario atractivas y personalizadas.'
          p2='Siempre estoy actualizado con las últimas tendencias y
            características en estos lenguajes para ofrecer soluciones web de
            alta calidad y rendimiento.'
        />
        <SkillItem
          src='/images/icons/frameworks-react.svg'
          titulo='Frameworks y Bibliotecas'
          p1='Soy experto en el uso de frameworks y bibliotecas populares como
          Next.js y React.js así como el CMS WordPress, lo que me permite crear soluciones web
          escalables y personalizadas para mis clientes.'
          p2='Además, siempre estoy actualizado con las últimas tendencias
          tecnológicas para mejorar mi habilidad y brindar soluciones de alta
          calidad.'
        />
      </div>
    </Section>
  );
};

export default SkillsSection;
