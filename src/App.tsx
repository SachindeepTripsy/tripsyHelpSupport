import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Last5Matches from "./pages/Last5Matches";
import OpenTicket from "./pages/OpenTicket";
import CreateANewSupportTicket from "./pages/CreateANewSupportTicket";
import Last5Withdrawals from "./pages/Last5Withdrawals";
import OpenTicket1 from "./pages/OpenTicket1";
import RateYourExperienceModal from "./pages/RateYourExperienceModal";
import OpenTicket2 from "./pages/OpenTicket2";
import TypeAMessage from "./pages/TypeAMessage";
import IssueDropdown from "./pages/IssueDropdown";
import Last5Deposits from "./pages/Last5Deposits";
import CreateANewSupportTicket1 from "./pages/CreateANewSupportTicket1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/open-ticket":
        title = "";
        metaDescription = "";
        break;
      case "/create-a-new-support-ticket":
        title = "";
        metaDescription = "";
        break;
      case "/last-5-withdrawals":
        title = "";
        metaDescription = "";
        break;
      case "/open-ticket1":
        title = "";
        metaDescription = "";
        break;
      case "/rate-your-experience-modal":
        title = "";
        metaDescription = "";
        break;
      case "/open-ticket2":
        title = "";
        metaDescription = "";
        break;
      case "/type-a-message":
        title = "";
        metaDescription = "";
        break;
      case "/issue-dropdown":
        title = "";
        metaDescription = "";
        break;
      case "/last-5-deposits":
        title = "";
        metaDescription = "";
        break;
      case "/create-a-new-support-ticket1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Last5Matches />} />
      <Route path="/open-ticket" element={<OpenTicket />} />
      <Route
        path="/create-a-new-support-ticket"
        element={<CreateANewSupportTicket />}
      />
      <Route path="/last-5-withdrawals" element={<Last5Withdrawals />} />
      <Route path="/open-ticket1" element={<OpenTicket1 />} />
      <Route
        path="/rate-your-experience-modal"
        element={<RateYourExperienceModal />}
      />
      <Route path="/open-ticket2" element={<OpenTicket2 />} />
      <Route path="/type-a-message" element={<TypeAMessage />} />
      <Route path="/issue-dropdown" element={<IssueDropdown />} />
      <Route path="/last-5-deposits" element={<Last5Deposits />} />
      <Route
        path="/create-a-new-support-ticket1"
        element={<CreateANewSupportTicket1 />}
      />
    </Routes>
  );
}
export default App;
