import PropTypes from "prop-types";
import styles from "./PageHeader.module.sass";

const PageHeader = ({ title }) => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageHeader;
