import { FunctionComponent } from "react";
import styles from "./CreateANewSupportTicket1.module.css";
const CreateANewSupportTicket1: FunctionComponent = () => {
  return (
    <div className={styles.createANewSupportTicket}>
      <div className={styles.createANewSupportTicketInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.keyboardArrowLeftParent}>
            <img
              className={styles.keyboardArrowLeftIcon}
              alt=""
              src="/keyboard-arrow-left.svg"
            />
            <div className={styles.contactUs}>Contact us</div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.exportImgParent}>
          <div className={styles.exportImg}>
            <img
              className={styles.cashGamesIcon}
              alt=""
              src="/cash-games@2x.png"
            />
          </div>
          <div className={styles.createANewSupportTicketParent}>
            <div className={styles.createANew}>Create a New Support Ticket</div>
            <div className={styles.value}>
              Please fill the form below to open a new ticket.
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.whatIsThisIssueRegardingParent}>
            <div className={styles.createANew}>
              What is this issue regarding?
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.depositWrapper}>
                  <div className={styles.deposit}>Deposit</div>
                </div>
                <div className={styles.gridiconsdropdownWrapper}>
                  <img
                    className={styles.gridiconsdropdown}
                    alt=""
                    src="/gridiconsdropdown1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.textFieldParent}>
              <div className={styles.textField}>
                <div className={styles.value1}>
                  Enter Deposit Transaction ID
                </div>
                <div className={styles.textFieldInner}>
                  <div className={styles.valueWrapper}>
                    <div className={styles.value2}>UW20212241234236540811</div>
                  </div>
                </div>
              </div>
              <div className={styles.viewLast5}>View Last 5 Deposits</div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameWrapper1}>
                <div className={styles.textFieldWrapper}>
                  <div className={styles.textField1}>
                    <div className={styles.value3}>
                      Explain the issue in detail
                    </div>
                    <div className={styles.valueContainer}>
                      <div className={styles.value4}>
                        <p className={styles.cashIAdded}>
                          Cash I added is not showing in my wallet
                        </p>
                        <p className={styles.cashIAdded}>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.attachFileFill0Wght600GradParent}>
                <img
                  className={styles.attachFileFill0Wght600GradIcon}
                  alt=""
                  src="/attach-file-fill0-wght600-grad0-opsz48-1.svg"
                />
                <div className={styles.attachFile}>Attach file</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.frameWrapper3}>
              <div className={styles.submitWrapper}>
                <div className={styles.submit}>Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateANewSupportTicket1;
