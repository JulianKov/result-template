import styles from "./AddButton.module.css";
import { FaHandsHelping } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { FC } from "react";

interface AddButtonProps {
  name: string;
}

const AddButton: FC<AddButtonProps> = ({ name }) => {
  const successToast = () => toast.success(`${name} added to friends!`);

  return (
    <button className={styles.button} onClick={successToast}>
      <FaHandsHelping color="white" />
      <Toaster
        toastOptions={{
          style: {
            boxShadow: "none",
          },
        }}
      />
    </button>
  );
};

export default AddButton;
