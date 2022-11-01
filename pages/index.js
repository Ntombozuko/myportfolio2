import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ntombi | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Who Am I</h1>
        <p className={styles.text}>
          I am Ntombozuko Ndamase a Computer Science graduate from Walter Sisulu
          University. I have completed a Data Engineering skills programme
          offered by Deviare in 2020 I have some basic knowledge of OOP, Java,
          Html and CSS3 all acquired during the completion of my Degree. During
          the Data Engineering skills programme I acquired knowlege in Data
          science with R, Data science with Python and Tableu.
          <br />I am currently an IT Audit Graduate Trainee at ICASA and uporn
          this duration of my gradute programme I have realised where my passion
          lies, I have realised that Software development is my first love. I am
          highly responsible and reliable, I have good work ethics and I am
          team-oriented person.
        </p>
        <p className={styles.text}>
          I would like to work at Sovtech as they are one of the leading
          software development companies in Africa. I believe that I would gain
          and contribute knowledge and skills at the company. I like the fact
          that they are a diverse company in terms of programming languages
          used, they have a good reputation and they are using the agile
          approach as their project management approach.
        </p>
      </div>
    </>
  );
}
