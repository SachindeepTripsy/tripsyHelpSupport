import { FunctionComponent } from "react";
import styles from "./IssueDropdown.module.css";
const IssueDropdown: FunctionComponent = () => {
  return (
    <div className={styles.issueDropdown}>
      <div className={styles.issueDropdownInner}>
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
                <div className={styles.cashDepositWrapper}>
                  <div className={styles.cashDeposit}>Cash Deposit</div>
                </div>
                <div className={styles.gridiconsdropdownWrapper}>
                  <img
                    className={styles.gridiconsdropdown}
                    alt=""
                    src="/gridiconsdropdown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.frameWrapper1}>
                <div className={styles.textFieldWrapper}>
                  <div className={styles.textField}>
                    <div className={styles.value1}>
                      Enter Deposit Transaction ID
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.viewLast5}>View Last 5 Deposits</div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.textFieldWrapper}>
                <div className={styles.textField1}>
                  <div className={styles.value1}>
                    <p className={styles.explainTheIssue}>
                      Explain the issue in detail
                    </p>
                    <p className={styles.explainTheIssue}>&nbsp;</p>
                    <p className={styles.explainTheIssue}>&nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameWrapper4}>
              <div className={styles.submitWrapper}>
                <div className={styles.submit}>Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scrim} />
      <div className={styles.issueDropdownChild}>
        <div className={styles.frameWrapper5}>
          <div className={styles.frameParent3}>
            <div className={styles.depositParent}>
              <div className={styles.deposit}>Deposit</div>
              <div className={styles.frameWrapper6}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-427319221.svg"
                />
              </div>
            </div>
            <div className={styles.withdrawalParent}>
              <div className={styles.deposit}>Withdrawal</div>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.withdrawalParent}>
              <div className={styles.deposit}>KYC Verification</div>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.withdrawalParent}>
              <div className={styles.deposit}>Jurisdiction (Location)</div>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.withdrawalParent}>
              <div className={styles.deposit}>Gameplay</div>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.withdrawalParent}>
              <div className={styles.deposit}>Other</div>
              <div className={styles.frameItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDropdown;
