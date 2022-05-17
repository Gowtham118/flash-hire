import React from "react";

import { compensationCardData } from "../../../data/compensationCards";

import shakeHandIcon from "../../../assets/icons/handshake-icon.png";
import womanHoldingPlant from "../../../assets/images/candidate-benefits/woman-holding-plant.png";
import womanHoldingPlantMobile from "../../../assets/images/candidate-benefits/woman-holding-plant-mobile.png";
import manClimbingStairs from "../../../assets/images/candidate-benefits/experience.png";
import clients from "../../../assets/images/candidate-benefits/clients.png";
import manClimbingStairsMobile from "../../../assets/images/candidate-benefits/experience-mobile.png";
import hiking from "../../../assets/images/candidate-benefits/hiking.png";

import styles from "./paymentDetails.module.scss";

const CompensationDetailsCard = ({
  title,
  packageRange,
  image,
  alt,
  textColor,
  backgroundColor,
}) => (
  <div
    className={styles.compensationDetailsCardContainer}
    style={{ background: backgroundColor }}
  >
    <div
      className={styles.compensationDetailsCardContainer__title}
      style={{ color: textColor }}
    >
      {title}
      <div className={styles.compensationDetailsCardContainer__title__text}>
        {packageRange}
      </div>
    </div>
    <img
      src={image}
      alt={alt}
      className={styles.compensationDetailsCardContainer__image}
    />
  </div>
);

const PaymentDetails = () => {
  const isMobileScreen = window.innerWidth < 900;

  return (
    <div className={styles.paymentDetailsContainer}>
      <div className={styles.paymentDetailsContainer__title}>
        <span className={styles.paymentDetailsContainer__title__blue}>
          Compensation&nbsp;
        </span>
        Details
      </div>
      <div className={styles.paymentDetailsContainer__normalText}>
        Get well paid jobs
      </div>
      <div
        className={styles.paymentDetailsContainer__compensationDetailsContainer}
      >
        {compensationCardData.map((item) => (
          <CompensationDetailsCard {...item} key={item.id} />
        ))}
      </div>
      <div className={styles.paymentDetailsContainer__normalTextSmaller}>
        The figure above is in-hand payment and does not include other benefits
        like ESOPs or fringe benefits. 😎
      </div>
      <div className={styles.paymentDetailsContainer__cardsContainer}>
        <div className={styles.paymentDetailsContainer__cardsContainer__card1}>
          <img
            src={isMobileScreen ? womanHoldingPlantMobile : womanHoldingPlant}
            alt="womanHoldingPlantImage"
            className={
              styles.paymentDetailsContainer__cardsContainer__card1__image
            }
          />
          <div
            className={
              styles.paymentDetailsContainer__cardsContainer__card1__content
            }
          >
            <img
              src={shakeHandIcon}
              alt="shakeHandIcon"
              className={
                styles.paymentDetailsContainer__cardsContainer__card1__content__icon
              }
            />
            <div
              className={
                styles.paymentDetailsContainer__cardsContainer__card1__content__title
              }
            >
              Get&nbsp;
              <span
                className={
                  styles.paymentDetailsContainer__cardsContainer__card1__content__title__bold
                }
              >
                ESOPs
              </span>
            </div>
            <div
              className={
                styles.paymentDetailsContainer__cardsContainer__card1__content__text
              }
            >
              <p>
                ESOPs are a game changer in your career. Getting your stocks
                vested and eventually realised could help you achieve financial
                freedom early in your career.
              </p>
              <p>
                At Flash Hire, we work on partnerships with emerging tech
                companies where this event is possible for you.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.paymentDetailsContainer__cardsContainer__card2}>
          <img
            src={isMobileScreen ? manClimbingStairsMobile : manClimbingStairs}
            alt="manClimbingStairsImage"
            className={
              styles.paymentDetailsContainer__cardsContainer__card2__image
            }
          />
          <div
            className={
              styles.paymentDetailsContainer__cardsContainer__card2__content
            }
          >
            <div
              className={
                styles.paymentDetailsContainer__cardsContainer__card2__content__title
              }
            >
              Get Invaluable&nbsp;{" "}
              <span
                className={
                  styles.paymentDetailsContainer__cardsContainer__card2__content__title__bold
                }
              >
                Experience
              </span>
            </div>
            <div
              className={
                styles.paymentDetailsContainer__cardsContainer__card2__content__text
              }
            >
              <p>
                At Flash Hire, we genuinely want you to work in emerging tech
                companies that will shape humanity. When you partner with a
                vision like that, you create high-fidelity career opportunities
                with significant potential for growth.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.paymentDetailsContainer__cardsContainer__card3}>
          <img
            src={isMobileScreen ? hiking : clients}
            alt="internationalClientsImage"
            className={
              styles.paymentDetailsContainer__cardsContainer__card3__image
            }
          />
          <div
            className={
              styles.paymentDetailsContainer__cardsContainer__card3__content
            }
          >
            <div
              className={
                styles.paymentDetailsContainer__cardsContainer__card3__content__title
              }
            >
              Get&nbsp;{" "}
              <span
                className={
                  styles.paymentDetailsContainer__cardsContainer__card3__content__title__bold
                }
              >
                International Clients
              </span>
            </div>
            <div
              className={
                styles.paymentDetailsContainer__cardsContainer__card3__content__text
              }
            >
              <p>
                We work relentlessly to create a robust network of clients
                across India, UAE and US. These clients are emerging tech
                companies actively looking to employ skilled product designers &
                developers.
              </p>
              <p>
                Flash Hire makes it easy to get a job at some of the most
                disruptive companies in the world. We're here to support you in
                your job search and land your dream job.
              </p>
            </div>
            {/* {isMobileScreen && <img src={hiking} alt="hikingImage"   className={
                styles.paymentDetailsContainer__cardsContainer__card3__image
              } />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
