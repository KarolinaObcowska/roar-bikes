import PropTypes from "prop-types";
import styles from "./PageHeader.module.sass";

const PageHeader = ({ title }) => {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.pageHeader__item}>
        <h2 className={styles.pageHeader__itemTitle}>{title}</h2>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageHeader;
