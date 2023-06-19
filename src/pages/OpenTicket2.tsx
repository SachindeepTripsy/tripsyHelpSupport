import { FunctionComponent } from "react";
import styles from "./OpenTicket2.module.css";
const OpenTicket2: FunctionComponent = () => {
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
              <div className={styles.ticket42840}>Ticket #42840</div>
              <div className={styles.genrePills}>
                <div className={styles.pillsWrapper}>
                  <div className={styles.pills}>Awaiting Support</div>
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
        <div className={styles.chatWrapper}>
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
                    Cash I added is not showing in my wallet
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
            <div className={styles.scheduleFill0Wght400Grad0OParent}>
              <img
                className={styles.scheduleFill0Wght400Grad0OIcon}
                alt=""
                src="/schedule-fill0-wght400-grad0-opsz48-3-1.svg"
              />
              <div className={styles.pleaseAllow2448}>
                Please allow 24-48 hours for TripsySupport to get back with a
                response to your query.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenTicket2;
