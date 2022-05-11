import manWritingNotes from "../assets/images/benefits-section/man-writing-notes.png";
import manSurfingInternet from "../assets/images/benefits-section/man-surfing-internet.png";
import womanFiltering from "../assets/images/benefits-section/female-filtering-a-funnel.png";
import manSavingMoney from "../assets/images/benefits-section/man-saving-money.png";

export const benefitsCardData = [
  {
    id: 0,
    content: {
      text1: "Avoid the  ",
      text2: "hassle of writing ",
      text3: "job descriptions and posting jobs",
    },
    image: manWritingNotes,
    alt: "manWritingNotes",
  },
  {
    id: 1,
    content: {
      text2: "Don’t worry about tracking  ",
      text3: "and analysing the effectiveness of your hiring channels",
    },
    image: manSurfingInternet,
    alt: "manSurfingInternet",
  },
  {
    id: 2,
    content: {
      text2: "Don’t get overwhelmed by ",
      text3:
        "the influx of applicants. Save time by selecting from pre-screened candidates",
    },
    image: womanFiltering,
    alt: "womanFiltering",
  },
  {
    id: 3,
    content: {
      text2: "Save cost ",
      text3: "on advertising jobs on job portals",
    },
    image: manSavingMoney,
    alt: "manSavingMoney",
  },
];
