import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const quantity = useSelector(state => state.cart.quantity)


  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>081 000 875 08</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={showNav === true ? `${styles.list} ${styles.show}` : styles.list}>
          <div className={styles.burger} onClick={() => setShowNav(!showNav)}>
            X &nbsp;
          </div>
          <li className={styles.listItem}>
            <Link href="/">
            Homepage
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/">
              Products
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/">
              Menu
            </Link>
          </li>
          <span className={styles.logo}>IVPizza</span>
          <li className={styles.listItem}>
            <Link href="/">
              Events
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/">
              Blog
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
        <div className={styles.burger} onClick={() => setShowNav(!showNav)}>
          <i className="fa fa-hamburger"></i> &nbsp;
        </div>
      <Link href="/cart">
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30" height="30" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
