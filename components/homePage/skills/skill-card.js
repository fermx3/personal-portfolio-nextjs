import Icon from '../../images/icon';

import classes from './skill-card.module.css';

const SkillCard = ({ src, titulo, p1, p2 }) => {
  return (
    <div className={classes.skill}>
      <div>
        <Icon src={src} alt={`${titulo} icono`} />
        <h3>{titulo}</h3>
      </div>
      <div>
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
    </div>
  );
};

export default SkillCard;
