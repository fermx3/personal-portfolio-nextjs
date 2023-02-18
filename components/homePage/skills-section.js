import React from 'react';
import Icon from '../images/icon';

const SkillsSection = () => {
  return (
    <section>
      <div>
        <Icon
          src='/images/icons/idea.svg'
          alt='Solucionador de problemas icono'
        />
        <h3>Solucionador de problemas</h3>
        <p>
          Me gusta investigar y encontrar la causa raíz de cualquier problema
          antes de proponer soluciones efectivas y prácticas. Además, estoy
          siempre aprendiendo y mejorando mis habilidades para poder ofrecer
          soluciones innovadoras y creativas.
        </p>
      </div>
      <div>
        <Icon
          src='/images/icons/lenguajes-js.svg'
          alt='Lenguajes de programación JavaScript icono'
        />
        <h3>Lenguajes de programación</h3>
        <p>
          Tengo experiencia en HTML, CSS y JavaScript, lo que me permite diseñar
          interfaces de usuario atractivas y personalizadas. Siempre estoy
          actualizado con las últimas tendencias y características en estos
          lenguajes para ofrecer soluciones web de alta calidad y rendimiento.
        </p>
      </div>
      <div>
        <Icon
          src='/images/icons/frameworks-react.svg'
          alt='Frameworks y bibliotecas icono'
        />
        <h3>Frameworks y Bibliotecas</h3>
        <p>
          Soy experto en el uso de frameworks y bibliotecas populares como
          Next.js, React.js y WordPress, lo que me permite crear soluciones web
          escalables y personalizadas para mis clientes. Además, siempre estoy
          actualizado con las últimas tendencias tecnológicas para mejorar mi
          habilidad y brindar soluciones de alta calidad.
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;
