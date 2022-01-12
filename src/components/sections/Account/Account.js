import { useContext } from "react";
import styles from "./Account.module.sass";
import Layout from "@Layout/Layout/Layout";
import { Avatar1 } from "@Images/avatars";
import Tracker from "../../elements/Tracker/Tracker";
import FormInput from "@Elements/Form/FormInput/FormInput";
import Button from "@Elements/Button/Button";
import { ModalContext } from "../../../assets/context/modalContext";

const Account = () => {
  const { handleModal } = useContext(ModalContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleModal("The data has been updated.");
  };

  return (
    <Layout>
      <Tracker />
      <section className={styles.container}>
        <div className={styles.account}>
          <div className={styles.accountHeader}>
            <img src={Avatar1} className={styles.avatar} />
            <h2 className={styles.name}>Brandon Short</h2>
          </div>
          <form className={styles.details} onSubmit={handleSubmit}>
            <FormInput labelName="E-mail" inputName="email" inputType="email" />
            <FormInput labelName="Name" inputName="name" inputType="text" />
            <FormInput
              labelName="Address (Streeet, Number)"
              inputName="address1"
              inputType="text"
            />
            <FormInput labelName="Address (City, Postcode)" inputName="address2" inputType="text" />
            <Button text="edit profile" buttonType="submit" />
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Account;
