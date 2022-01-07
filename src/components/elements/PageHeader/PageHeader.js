/* eslint-disable react/prop-types */
import "./pageHeader.sass";

const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      <div className="page-header__item">
        <h2 className="page-header__item-title">{title}</h2>
      </div>
    </div>
  );
};

export default PageHeader;
