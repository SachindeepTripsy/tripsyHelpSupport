import { FunctionComponent } from "react";
import styles from "./OpenTicket1.module.css";
const OpenTicket1: FunctionComponent = () => {
  return (
    <div className={styles.openTicket}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.keyboardArrowLeftParent}>
              <img
                className={styles.keyboardArrowLeftIcon}
                alt=""
                src="/keyboard-arrow-left.svg"
              />
              <div className={styles.ticket42841}>Ticket #42841</div>
              <div className={styles.genrePills}>
                <div className={styles.pillsWrapper}>
                  <div className={styles.pills}>Resolved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.vector11Stroke}
          alt=""
          src="/vector-11-stroke1.svg"
        />
        <div className={styles.frameGroup}>
          <div className={styles.frameDiv}>
            <div className={styles.issueTypeParent}>
              <div className={styles.issueType}>Issue Type</div>
              <div className={styles.depositWrapper}>
                <div className={styles.pills}>Deposit</div>
              </div>
            </div>
            <div className={styles.issueTypeParent}>
              <div className={styles.issueType}>Ticket Created</div>
              <div className={styles.depositWrapper}>
                <div className={styles.pills}>25 Apr 2023, 12:09 PM</div>
              </div>
            </div>
          </div>
          <img
            className={styles.vector11Stroke}
            alt=""
            src="/vector-11-stroke2.svg"
          />
        </div>
        <div className={styles.chatParent}>
          <div className={styles.chat}>
            <div className={styles.left}>
              <div className={styles.title}>
                <div className={styles.image2Parent}>
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <div className={styles.pills}>Sachin Uppal</div>
                </div>
                <div className={styles.yesterday1119Pm}>
                  Yesterday, 11:19 PM
                </div>
              </div>
              <div className={styles.bubbles}>
                <div className={styles.bubble}>
                  <div className={styles.hiYourService}>
                    I haven’t received my withdrawal amount in my bank account
                    yet. It’s been 3 days. Please resolve this ASAP.
                  </div>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle.svg"
                  />
                  <img
                    className={styles.vector11Stroke2}
                    alt=""
                    src="/vector-11-stroke3.svg"
                  />
                  <div className={styles.transactionIdParent}>
                    <div className={styles.transactionId}>Transaction ID</div>
                    <div className={styles.depositWrapper}>
                      <div className={styles.pills}>UW20212241234236540811</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.left1}>
              <div className={styles.title1}>
                <div className={styles.image2Parent}>
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="/image-21@2x.png"
                  />
                  <div className={styles.pills}>TripsySupport</div>
                </div>
                <div className={styles.yesterday1119Pm}>Today, 10:10 PM</div>
              </div>
              <div className={styles.bubbles1}>
                <div className={styles.bubble1}>
                  <div className={styles.hiYourService1}>
                    We have processed your request. The amount will be credited
                    in 1-2 business days in your bank account,
                  </div>
                  <img
                    className={styles.rectangleIcon1}
                    alt=""
                    src="/rectangle1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.doneFill0Wght600Grad0Opsz4Parent}>
            <img
              className={styles.doneFill0Wght600Grad0Opsz4Icon}
              alt=""
              src="/done-fill0-wght600-grad0-opsz48-1.svg"
            />
            <div className={styles.youMarkedThis}>
              You marked this ticket as resolved. If you have more issues please
              open a new support ticket.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenTicket1;
