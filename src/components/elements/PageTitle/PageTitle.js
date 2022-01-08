import PropTypes from "prop-types";
import styles from "./PageTitle.module.sass";

const PageTitle = ({ title }) => {
  return <h3 className={styles.title}>{title}</h3>;
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
