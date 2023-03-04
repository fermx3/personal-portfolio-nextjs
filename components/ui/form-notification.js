import classes from './form-notification.module.css';

const FormNotification = ({ message, status }) => {
  return (
    <div className={`${classes.notification} ${status && classes[status]}`}>
      <p>{message}</p>
    </div>
  );
};

export default FormNotification;
