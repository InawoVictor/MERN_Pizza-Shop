import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import axios from "axios"
import { useState } from "react";
import Add from "@/components/Add";
import AddButton from "@/components/AddButton";

export default function Home({pizzaList, admin}) {

  const [close, setClose] = useState(true)
  if(!process.env.NEXT_PUBLIC_API_URL){
    return null
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin && <AddButton setClose = {setClose}/>}
      <PizzaList pizzaList={pizzaList}/>
      {!close && <Add setClose = {setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {

  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN){
    admin = true;
  }
 
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`) 

  return{
    props:{
      pizzaList: res.data,
      admin
    }
  }

  
}