import styles from "./Account.module.sass";
import Layout from "@Layout/Layout/Layout";
import { Avatar1 } from "@Images/avatars";
import Tracker from "../../elements/Tracker/Tracker";
import FormInput from "@Elements/Form/FormInput/FormInput";
import Button from "@Elements/Button/Button";
import useForm from "../../../assets/hooks/useForm";
import { accountValidations as validations } from "../../../assets/data/validations";

const Account = () => {
  const { handleChange, values, handleSubmit, errors } = useForm({ validations });
  const inputs = [
    {
      id: 1,
      inputName: "email",
      labelName: "E-mail",
      inputType: "email"
    },
    {
      id: 2,
      inputName: "name",
      labelName: "Name",
      inputType: "text"
    },
    {
      id: 2,
      inputName: "address1",
      labelName: "Address (Streeet, Number)",
      inputType: "text"
    },
    {
      id: 3,
      inputName: "address2",
      labelName: "Address (City, Postcode)",
      inputType: "text"
    }
  ];
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
            {inputs.map((input) => (
              <>
                <FormInput
                  key={input.id}
                  {...input}
                  handleChange={handleChange}
                  errors={errors}
                  values={values}
                  onChange={handleChange}
                />
                {errors[input.inputName] && (
                  <small className={styles.errMessage}>{errors[input.inputName]}</small>
                )}
              </>
            ))}
            <Button text="edit profile" buttonType="submit" />
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Account;
