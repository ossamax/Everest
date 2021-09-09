import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import heroImg from "../public/hero_image.png";
import start from "../public/Star_Vector_Mark.svg";
import aboutImg from "../public/About_Overview-Image.png";
import arrowOrange from "../public/Arrow_Orange.svg";
import user from "../public/Icon_User.svg";
import nutrition from "../public/Icon_Diet.svg";
import experience from "../public/Icon_Shield.svg";
import motivation from "../public/Icon_Motivation.svg";
import training from "../public/Icon_Training.svg";
import heart from "../public/Icon_Heart.svg";
import avatarCarter from "../public/Avatar_Carter.png";
import avatarLeo from "../public/Avatar_Leo.png";
import avatarMarlyn from "../public/Avatar_Marilyn.png";
import accent from "../public/Hero_Accent_Large.svg";
import instagram from "../public/Instagram_White.svg";
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
        <meta charSet="UTF-8" />
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
            <div
              className={
                !active
                  ? styles.active_navigation_links
                  : styles.navigation_links
              }
            >
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/">
                <a>About</a>
              </Link>
              <Link href="/">
                <a>Services</a>
              </Link>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </div>
          </div>
          <div className={styles.book_btn}>
            <Link href="/contact" passHref>
              <button>Book Class</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.hero_content}>
            <small>EVEREST TEAM</small>
            <h1>The ultimate online personal training plans!</h1>
            <div className={styles.cta_btn}>
              <button className={styles.book_btn}>
                <Link href="/contact" passHref>
                  BooK A Class
                </Link>
              </button>
              <button className={styles.about_btn}>
                <Link href="/about" passHref>
                  About Me
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.hero_image}>
            <Image src={heroImg} alt="Everest hero image body" />
          </div>
        </div>
      </div>
      <div className={styles.hero_features}>
        <div className={styles.container}>
          <div className={styles.feature}>
            <span>
              <Image src={start} alt="start svg" />
            </span>
            Affordable Training & Eating Plans
          </div>
          <div className={styles.feature}>
            <span>
              <Image src={start} alt="start svg" />
            </span>
            14 Day Free Return on Purchase
          </div>
          <div className={styles.feature}>
            <span>
              <Image src={start} alt="start svg" />
            </span>
            5 Star Rated Personal Trainer
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.container}>
          <div className={styles.about_image}>
            <Image src={aboutImg} alt="start svg" />
          </div>
          <div className={styles.about_content}>
            <h1>About Max Ganes?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              et, ultrices fermentum felis pretium. Vel ut sed aliquam dictum
              mattis faucibus. Varius eu dapibus donec amet. Mauris sit mi
              nullam tortor.
            </p>
            <Link href="/about" passHref>
              <button>Learn more</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              et, ultrices fermentum felis pretium.
            </p>
          </div>
          <div className={styles.services_carts}>
            <div className={styles.service}>
              <div className={styles.service_image_1}></div>
              <h4>Pilates Training</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
              <div className={styles.cta_wrp}>
                <Link href="/services/pilates-training" passHref>
                  Learn More
                </Link>
                <Image src={arrowOrange} alt="arrow_svg" width={25} />
              </div>
            </div>
            <div className={styles.service}>
              <div className={styles.service_image_2}></div>
              <h4>CrossFit Training</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
              <div className={styles.cta_wrp}>
                <Link href="/services/pilates-training" passHref>
                  Learn More
                </Link>
                <Image src={arrowOrange} alt="arrow_svg" width={25} />
              </div>
            </div>
            <div className={styles.service}>
              <div className={styles.service_image_3}></div>
              <h4>Fitness Training</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
              <div className={styles.cta_wrp}>
                <Link href="/services/pilates-training" passHref>
                  Learn More
                </Link>
                <Image src={arrowOrange} alt="arrow_svg" width={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div>
              <h1>Why choosing me as your personal trainer</h1>
            </div>
            <button>Book A Class</button>
          </div>
          <div className={styles.feature_wrp}>
            <div className={styles.ftr}>
              <Image
                src={user}
                alt="user icon svg"
                className={styles.ftr_icon}
              />
              <h3>Certified trainer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit velitolm
                platea libero, ultricies hendrerit.
              </p>
            </div>
            <div className={styles.ftr}>
              <Image
                src={nutrition}
                alt="user icon svg"
                className={styles.ftr_icon}
              />
              <h3>Nutrition & diet</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit velitolm
                platea libero, ultricies hendrerit.
              </p>
            </div>
            <div className={styles.ftr}>
              <Image
                src={experience}
                alt="user icon svg"
                className={styles.ftr_icon}
              />
              <h3>Years of experience</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit velitolm
                platea libero, ultricies hendrerit.
              </p>
            </div>
            <div className={styles.ftr}>
              <Image
                src={motivation}
                alt="user icon svg"
                className={styles.ftr_icon}
              />
              <h3>Support & motivation</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit velitolm
                platea libero, ultricies hendrerit.
              </p>
            </div>
            <div className={styles.ftr}>
              <Image
                src={training}
                alt="user icon svg"
                className={styles.ftr_icon}
              />
              <h3>1-on-1 training</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit velitolm
                platea libero, ultricies hendrerit.
              </p>
            </div>
            <div className={styles.ftr}>
              <Image
                src={heart}
                alt="user icon svg"
                className={styles.ftr_icon}
              />
              <h3>Commitment</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit velitolm
                platea libero, ultricies hendrerit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reviews}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div>
              <h1>What my clients say about me?</h1>
            </div>
            <button>Book A Class</button>
          </div>
          <div className={styles.reviews_wrp}>
            <div className={styles.review}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                habitasse arcu vulputate consectetur velit scelerisque
              </p>
              <div className={styles.avatar}>
                <Image src={avatarCarter} alt="avatar review image" />
                <div className={styles.avatar_info}>
                  <strong>Carter Franci</strong>
                  <small>Lost Angekes ,CA</small>
                </div>
              </div>
            </div>
            <div className={styles.review}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                habitasse arcu vulputate consectetur velit scelerisque
              </p>
              <div className={styles.avatar}>
                <Image src={avatarLeo} alt="avatar review image" />
                <div className={styles.avatar_info}>
                  <strong>Leo Press</strong>
                  <small>Lost Angekes ,CA</small>
                </div>
              </div>
            </div>
            <div className={styles.review}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                habitasse arcu vulputate consectetur velit scelerisque
              </p>
              <div className={styles.avatar}>
                <Image src={avatarMarlyn} alt="avatar review image" />
                <div className={styles.avatar_info}>
                  <strong>Marilyn Dokidis</strong>
                  <small>Lost Angekes ,CA</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cta_section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>What are you waiting for?</h1>
            <p>
              Signup to our newsletter to get a free 30 day meal plan. You will
              receive all guidance on what to eat, how to cook and how much to
              eat.
            </p>
            <Link href="/contact" passHref>
              <button>Contact Me</button>
            </Link>
          </div>
          <div className={styles.svgBackground}>
            <Image src={accent} alt="background image" />
          </div>
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={styles.container}>
          <h1>Classes Schedule</h1>
          <div className={styles.table_wrp}>
            <div className={styles.table_head}>
              <div>Time</div>
              <div>Monday</div>
              <div>tuesday</div>
              <div>wednesday</div>
              <div>thursday</div>
              <div>Friday</div>
              <div>Saturday</div>
              <div>Sunday</div>
            </div>
            <div className={styles.first}>
              <div className={styles.date}>
                <span>09:00 PM</span>
              </div>
              <div>
                <strong>Pilates</strong>
                <br />
                <small>Floyd Miles</small>
              </div>
              <div>
                <strong>Fit Body</strong>
                <br />
                <small>Ralpha Edwards</small>
              </div>
              <div>
                <strong>Yoga</strong>
                <br />
                <small>Leslie Alexander</small>
              </div>
              <div>
                <strong>Cross Fit</strong>
                <br />
                <small>Esther Howard</small>
              </div>
              <div>
                <strong>Pilates</strong>
                <br />
                <small>Cody Fisher</small>
              </div>
              <div className={styles.empty}></div>
              <div>
                <strong>Fit Body</strong>
                <br />
                <small>Ronald Richards</small>
              </div>
            </div>
            <div className={styles.seconde}>
              <div className={styles.date}>
                <span>10:00 PM</span>
              </div>
              <div>
                <strong>Pilates</strong>
                <br />
                <small>Floyd Miles</small>
              </div>
              <div>
                <strong>Fit Body</strong>
                <br />
                <small>Ralpha Edwards</small>
              </div>
              <div className={styles.empty}></div>
              <div>
                <strong>Cross Fit</strong>
                <br />
                <small>Esther Howard</small>
              </div>
              <div>
                <strong>Pilates</strong>
                <br />
                <small>Cody Fisher</small>
              </div>
              <div>
                <strong>Cross Fit</strong>
                <br />
                <small>Esther Howard</small>
              </div>
              <div className={styles.empty}></div>
            </div>
            <div className={styles.first}>
              <div className={styles.date}>
                <span>03:00 AM</span>
              </div>
              <div className={styles.empty}></div>
              <div>
                <strong>Fit Body</strong>
                <br />
                <small>Ralpha Edwards</small>
              </div>
              <div>
                <strong>Yoga</strong>
                <br />
                <small>Leslie Alexander</small>
              </div>
              <div>
                <strong>Cross Fit</strong>
                <br />
                <small>Esther Howard</small>
              </div>
              <div>
                <strong>Pilates</strong>
                <br />
                <small>Cody Fisher</small>
              </div>
              <div className={styles.empty}></div>
              <div>
                <strong>Fit Body</strong>
                <br />
                <small>Ronald Richards</small>
              </div>
            </div>
            <div className={styles.seconde}>
              <div className={styles.date}>
                <span>05:00 AM</span>
              </div>
              <div>
                <strong>Pilates</strong>
                <br />
                <small>Floyd Miles</small>
              </div>
              <div>
                <strong>Fit Body</strong>
                <br />
                <small>Ralpha Edwards</small>
              </div>
              <div>
                <strong>Yoga</strong>
                <br />
                <small>Leslie Alexander</small>
              </div>
              <div>
                <strong>Cross Fit</strong>
                <br />
                <small>Esther Howard</small>
              </div>
              <div className={styles.empty}></div>
              <div>
                <strong>Pilates</strong>
                <br />
                <small>Cody Fisher</small>
              </div>

              <div>
                <strong>Fit Body</strong>
                <br />
                <small>Ronald Richards</small>
              </div>
            </div>
            <div className={styles.first}>
              <div className={styles.date}>
                <span>09:00 PM</span>
              </div>
              <div>
                <strong>Pilates</strong>
                <br />
                <small>Floyd Miles</small>
              </div>
              <div>
                <strong>Fit Body</strong>
                <br />
                <small>Ralpha Edwards</small>
              </div>
              <div>
                <strong>Yoga</strong>
                <br />
                <small>Leslie Alexander</small>
              </div>
              <div>
                <strong>Cross Fit</strong>
                <br />
                <small>Esther Howard</small>
              </div>
              <div>
                <strong>Pilates</strong>
                <br />
                <small>Cody Fisher</small>
              </div>
              <div className={styles.empty}></div>
              <div>
                <strong>Fit Body</strong>
                <br />
                <small>Ronald Richards</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fqa}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className={styles.fqa_wrp}>
            <div>
              <h2>Can your program be taken online?</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div>
              <h2>Can your program be taken online?</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div>
              <h2>Can your program be taken online?</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div>
              <h2>Can your program be taken online?</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div>
              <h2>Can your program be taken online?</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socila_media}>
        <div className={styles.container}>
          <h1>Follow me on Instagram</h1>
          <div className={styles.insta_images}>
            <Link href="https://www.instagram.com" passHref>
              <div className={styles.insta_image1}>
                <div className={styles.overlay}>
                  <div className={styles.icon}>
                    <Image src={instagram} alt="instagram icon" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="https://www.instagram.com" passHref>
              <div className={styles.insta_image2}>
                <div className={styles.overlay}>
                  <div className={styles.icon}>
                    <Image src={instagram} alt="instagram icon" />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="https://www.instagram.com" passHref>
              <div className={styles.insta_image3}>
                <div className={styles.overlay}>
                  <div className={styles.icon}>
                    <Image src={instagram} alt="instagram icon" />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="https://www.instagram.com" passHref>
              <div className={styles.insta_image4}>
                <div className={styles.overlay}>
                  <div className={styles.icon}>
                    <Image src={instagram} alt="instagram icon" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo} passHref>
            <div className={styles.logo}>
              <Image src={Logo} alt="Everest logo" />
            </div>
          </Link>
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
        <div className={styles.rights}>@ All right are reserved 2021</div>
      </div>
    </>
  );
}
