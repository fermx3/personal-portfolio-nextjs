import { useRouter } from 'next/router';

import Button from '../ui/button';

import classes from './categories-group.module.css';

const CategoriesGroup = ({ buttons, query }) => {
  const router = useRouter();

  let tags = [];
  let queryURL;

  if (query) {
    tags = query.tags;
    queryURL = query.tags.join('/');
  }

  const handleClick = (tecnologia) => {
    tags = tags.filter((tag) => tag !== tecnologia);

    if (tags.length === 0) {
      router.push('/portafolio');
    } else {
      const URL = tags.join('/');
      router.push(`/portafolio/filtro/${URL}`);
    }
  };

  return (
    <div className={classes.categories}>
      {buttons.map((tecnologia) =>
        tags.includes(tecnologia) ? (
          <Button
            key={tecnologia}
            onClick={() => {
              handleClick(tecnologia);
            }}
            type={`selected`}
          >
            {tecnologia}
          </Button>
        ) : (
          <Button
            key={tecnologia}
            href={
              query
                ? `/portafolio/filtro/${queryURL}/${tecnologia}`
                : `/portafolio/filtro/${tecnologia}`
            }
            type={`small`}
          >
            {tecnologia}
          </Button>
        )
      )}
    </div>
  );
};

export default CategoriesGroup;
