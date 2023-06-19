import { FunctionComponent } from "react";
import styles from "./TypeAMessage.module.css";
const TypeAMessage: FunctionComponent = () => {
  return (
    <div className={styles.typeAMessage}>
      <div className={styles.vector11StrokeParent}>
        <img
          className={styles.vector11Stroke}
          alt=""
          src="/vector-11-stroke1.svg"
        />
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
                  <div className={styles.pills}>Reponse Received</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
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
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.textFieldParent}>
            <div className={styles.textField}>
              <div className={styles.textFieldInner}>
                <div className={styles.valueParent}>
                  <div className={styles.value}>Type A Message</div>
                  <img
                    className={styles.attachFileFill0Wght500GradIcon}
                    alt=""
                    src="/attach-file-fill0-wght500-grad0-opsz48-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.sendWrapper}>
                <div className={styles.send}>Send</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeAMessage;
