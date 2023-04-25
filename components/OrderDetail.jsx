import styles from "@/styles/OrderDetail.module.css";
import { useState } from "react";

const OrderDetail = ({total, CreateOrder}) => {

  const [customer, setCostumer] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    CreateOrder({customer, address, total, method: 0});
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay $12 after delivery.</h1>
        <div className={styles.item}>
            <label htmlFor="fullname" className={styles.label}>Name Surname</label>
            <input type="text" 
                placeholder="John Doe" 
                name="fullname"  
                className={styles.input}
                value={customer}
                onChange={(e) => setCostumer(e.target.value)}
            />
        </div>  
        <div className={styles.item}>
            <label htmlFor="phoneNumber" className={styles.label}>Name Surname</label>
            <input type="text" 
                placeholder="+1 234 567 89" 
                name="phoneNumber"  
                className={styles.input}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
        </div> 
        <div className={styles.item}>
            <label htmlFor="address" className={styles.label}>Address</label>
            <textarea 
              type="text"
              rows={5}
              placeholder="Elton St. 505 NY" 
              name="address"  
              className={styles.input}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
        </div>     
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  )
}

export default OrderDetail
