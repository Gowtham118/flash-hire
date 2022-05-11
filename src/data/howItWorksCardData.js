import handShakeIcon from "../assets/icons/handshake-icon.png";
import groupOfPeopleIcon from "../assets/icons/group-of-people.png";
import addFriendIcon from "../assets/icons/add-friend-icon.png";
import calendarIcon from "../assets/icons/calendar-icon.png";
import cashIcon from "../assets/icons/cash-icon.png";

import signUpImage from "../assets/images/how-it-works-section/signup-image.png";
import groupOfPeopleImage from "../assets/images/how-it-works-section/team-profile-image.png";
import interViewImage from "../assets/images/how-it-works-section/interview-image.png";
import scheduleImage from "../assets/images/how-it-works-section/schedule-image.png";
import payingCashImage from "../assets/images/how-it-works-section/paying-money-image.png";

export const howItWorksCardData = [
  {
    id: 0,
    icon: handShakeIcon,
    title: "Sign Up",
    tagLine: "TAKES 2 MINUTES",
    description:
      "We reach out to you in 24 hours to learn about your vision and assist you in ascertaining the techie mix you need to build your product.",
    image: signUpImage,
  },
  {
    id: 1,
    icon: groupOfPeopleIcon,
    title: "Get Vetted Engineers and Designers",
    description:
      "We curate and provide a list of pre-screened candidates who have proven their mettle through their portfolio and not just what they write in their resume.",
    image: groupOfPeopleImage,
  },
  {
    id: 2,
    icon: addFriendIcon,
    title: "Hire in a Flash",
    description:
      "Candidates that are ready to interview, reply in 72 hours. <br/> We set up interviews → Get you the right fit within 2 weeks.",
    image: interViewImage,
  },
  {
    id: 3,
    icon: calendarIcon,
    title: "Assisted Scheduling of Interviews",
    description:
      "Sit back and tell us what’s a convenient schedule for you. We manage the rest and ensure you secure a connection with the candidate.",
    image: scheduleImage,
  },
  {
    id: 4,
    icon: cashIcon,
    title: "Pay only if you hire",
    description:
      "We charge flat 8.33% of the CTC, with a 3 month candidate-replacement guarantee. ",
    image: payingCashImage,
  },
];
