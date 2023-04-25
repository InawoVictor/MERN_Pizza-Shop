import styles from "@/styles/AddButton.module.css";

const AddButton = ({setClose}) => {
  return (
    <div className={styles.mainAddButton}
      onClick={() => setClose(false)}
    >
      Add New Pizza
    </div>
  )
}

export default AddButton
