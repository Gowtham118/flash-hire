import React from "react";
import { Tabs } from "antd";

import { iconCardsData } from "../../../data/iconCards";

import manWomanEquality from "../../../assets/images/man-woman-equality.png";
import manWomanShakeHand from "../../../assets/images/canidates-benefits/man-woman-shake-hand.png";
import manWomanShakeHandMobile from "../../../assets/images/canidates-benefits/man-woman-shake-hand-mobile.png";
import womanCashInHand from "../../../assets/images/canidates-benefits/woman-cash-bank.png";
import womanCashInHandMobile from "../../../assets/images/canidates-benefits/woman-cash-bank-mobile.png";
import handShakeIcon from "../../../assets/icons/handshake-icon.png";
import cashIcon from "../../../assets/icons/cash-icon.png";
import flashDottedLargeIcon from "../../../assets/icons/flash-dotted-large-icon.png";
import yellowHandShake from "../../../assets/icons/candidates-usp/shakehand.png";
import blueContract from "../../../assets/icons/candidates-usp/contract.png";

import styles from "./candidateBenefits.module.scss";

const { TabPane } = Tabs;

const IconCard = ({ icon, alt, text }) => {
  return (
    <div className={styles.iconCardContainer}>
      <img src={icon} alt={alt} className={styles.iconCardContainer__icon} />
      <div className={styles.iconCardContainer__text}>{text}</div>
    </div>
  );
};
const CandidateBenefits = () => {
  const isMobileScreen = window.innerWidth < 900;
  return (
    <div className={styles.candidateBenefitsContainer}>
      <div className={styles.candidateBenefitsContainer__title}>
        What can you expect from{" "}
        <span className={styles.candidateBenefitsContainer__title__blue}>
          Flash Hire
        </span>
      </div>
      <div className={styles.candidateBenefitsContainer__content}>
        <div
          className={
            styles.candidateBenefitsContainer__content__iconCardsContainer
          }
        >
          {iconCardsData.map((item) => (
            <IconCard
              icon={item.icon}
              alt={item.alt}
              text={item.text}
              key={item.id}
            />
          ))}
        </div>
        {window.innerWidth >= 900 && (
          <img src={manWomanEquality} alt="manWomanBalance" />
        )}
      </div>
      <div className={styles.candidateBenefitsContainer__getEmployedCard}>
        <div
          className={
            styles.candidateBenefitsContainer__getEmployedCard__content
          }
        >
          <img
            src={handShakeIcon}
            alt="handShakeIcon"
            className={
              styles.candidateBenefitsContainer__getEmployedCard__content__icon
            }
          />
          <div
            className={
              styles.candidateBenefitsContainer__getEmployedCard__content__title
            }
          >
            Get{" "}
            <span
              className={
                styles.candidateBenefitsContainer__getEmployedCard__content__title__bold
              }
            >
              Employed&nbsp;
            </span>
            or{" "}
            <span
              className={
                styles.candidateBenefitsContainer__getEmployedCard__content__title__bold
              }
            >
              Contracted
            </span>
          </div>
          <div
            className={
              styles.candidateBenefitsContainer__getEmployedCard__content__text
            }
          >
            <p>
              Flash Hire strives to position you in the right role at a company
              where we believe you will thrive.
            </p>

            <p>
              We don't just match you with a company that is looking to hire a
              developer. We consider the company's people, product and its
              growth to gauge if the opportunity of working in it would ascend
              your career.
            </p>
          </div>
        </div>
        <img
          src={isMobileScreen ? manWomanShakeHandMobile : manWomanShakeHand}
          alt="manWomanShakeHand"
          className={styles.candidateBenefitsContainer__getEmployedCard__image}
        />
      </div>
      {!isMobileScreen && (
        <img
          src={flashDottedLargeIcon}
          alt="flashDottedLargeIcon"
          className={styles.candidateBenefitsContainer__flashDottedIcon}
        />
      )}
      <div className={styles.candidateBenefitsContainer__getPaidCard}>
        <img
          src={isMobileScreen ? womanCashInHand : womanCashInHandMobile}
          alt="womanCashInHand"
          className={styles.candidateBenefitsContainer__getPaidCard__image}
        />
        <div
          className={styles.candidateBenefitsContainer__getPaidCard__content}
        >
          <img
            src={cashIcon}
            alt="cashIcon"
            className={
              styles.candidateBenefitsContainer__getPaidCard__content__icon
            }
          />
          <div
            className={
              styles.candidateBenefitsContainer__getPaidCard__content__title
            }
          >
            Get{" "}
            <span
              className={
                styles.candidateBenefitsContainer__getPaidCard__content__title__bold
              }
            >
              Paid
            </span>
          </div>
          <div
            className={
              styles.candidateBenefitsContainer__getPaidCard__content__text
            }
          >
            <p>The payment format depends on the job type.</p>
            {!isMobileScreen && (
              <div
                className={
                  styles.candidateBenefitsContainer__getPaidCard__content__text__cards
                }
              >
                <Tabs defaultActiveKey="1">
                  <TabPane
                    tab={
                      <span className={styles.tabText}>
                        <img
                          src={yellowHandShake}
                          alt="yellowHandShake"
                          className={styles.tabIcon}
                        />{" "}
                        By Employment
                      </span>
                    }
                    key="1"
                  >
                    {" "}
                    Your employment compensation structure will be based on the
                    negotiated CTC.
                  </TabPane>
                  <TabPane
                    tab={
                      <span className={styles.tabText}>
                        <img
                          src={blueContract}
                          alt="blueContractIcon"
                          className={styles.tabIcon}
                        />{" "}
                        By Contract
                      </span>
                    }
                    key="2"
                  >
                    Your employment compensation structure will be based on the
                    negotiated CTC.
                  </TabPane>
                </Tabs>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateBenefits;
