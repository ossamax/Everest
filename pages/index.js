import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import heroImg from "../public/hero_image.png";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(true);
  const ToggleClass = () => {
    setActive(!active);
  };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://assets.website-files.com/60c1736aaad648491e964d73/60c1736aaad6482505964d92_Favicon.svg"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <title>Everest - website</title>
      </Head>
      <div className={styles.navigation}>
        <div className={styles.container}>
          <div className={styles.nav_logo_wrp}>
            <Link href="/" className={styles.logo} passHref>
              <div className={styles.logo}>
                <Image src={Logo} alt="Everest logo" />
              </div>
            </Link>
            <div
              className={
                !active
                  ? styles.active_menu_burger_icon
                  : styles.menu_burger_icon
              }
              onClick={ToggleClass}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={styles.navigation_links}>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/about">
                <a>About</a>
              </Link>
              <Link href="/services">
                <a>Services</a>
              </Link>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </div>
          </div>
          <div className={styles.book_btn}>
            <button>Book Class</button>
          </div>
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.hero_content}>
            <small>EVEREST TEAM</small>
            <h1>The ultimate online personal training plans!</h1>
            <div className={styles.cta_btn}>
              <button className={styles.book_btn}>Book A Class</button>
              <button className={styles.about_btn}>About Me</button>
            </div>
          </div>
          <div className={styles.hero_image}>
            <Image src={heroImg} alt="Everest hero image body" />
          </div>
        </div>
      </div>
    </>
  );
}
