import styles from "./Account.module.sass";
import Layout from "@Layout/Layout/Layout";
import { Avatar1 } from "@Images/avatars";
import Tracker from "../../elements/Tracker/Tracker";
import FormInput from "@Elements/Form/FormInput/FormInput";
import Button from "@Elements/Button/Button";
const Account = () => {
  return (
    <Layout>
      <Tracker />
      <section className={styles.container}>
        <div className={styles.account}>
          <div className={styles.accountHeader}>
            <img src={Avatar1} className={styles.avatar} />
            <h2 className={styles.name}>Brandon Short</h2>
          </div>
          <from className={styles.details}>
            <FormInput name="E-mail" />
            <FormInput name="Name" />
            <FormInput name="Location" />
            <FormInput name="Address (Streeet, Number)" />
            <FormInput name="Address (City, Postcode)" />
            <Button text="edit profile" />
          </from>
        </div>
      </section>
    </Layout>
  );
};

export default Account;
