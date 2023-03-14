import Icon from '../../icon/icon';

import classes from './skill-item.module.css';

const SkillItem = ({ src, titulo, p1, p2, whiteOnDarkTheme }) => {
  return (
    <div className={classes.skill}>
      <div>
        <Icon
          src={src}
          alt={`${titulo} icono`}
          whiteOnDarkTheme={whiteOnDarkTheme}
        />
        <h3>{titulo}</h3>
      </div>
      <div>
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
    </div>
  );
};

export default SkillItem;
