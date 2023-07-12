import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import {
  MyCard,
  MyCardBlue,
  MyCardYellow,
  MyCardOne,
  MyCardYellow2,
} from "./MyCard";
import styles from "/styles/home/Index.module.scss";
import imageone from "public/assests/home_img/Download.svg";
import arabian2 from "public/assests/home_img/arabian.jpg";
import working from "public/assests/home_img/working.jpg";
import invitation from "public/assests/home_img/invitation.png";
import invitationcard from "public/assests/home_img/invitationcard.svg";
import nikkah from "public/assests/home_img/nikkah.png";
import checklist from "public/assests/home_img/Checklist.jpg";
import PlanCard4 from "public/assests/home_img/planCard4.png";
import PlanCard6 from "public/assests/home_img/planCard6.png";
import PlanCards from "./PlanCards";

const Plan = () => {
  const planCardsData = [
    {
      id: 1,
      primaryColor: "#FA5856",
      secondaryColor: "#FEE7E6",
      image: working,
      headingText: "Vendor Search",
      text: "Browse through venues, catering, decor & more with our most economical platform for make your dream wedding comes true.",
      btnTextColor: "#fff",
    },
    {
      id: 2,
      primaryColor: "#F5C989",
      secondaryColor: "#FDF4E7",
      image: invitationcard,
      headingText: "Shop Invitation Cards",
      text: "Browse through venues, catering, decor & more with our most economical platform for make your dream wedding comes true.",
      btnTextColor: "#000",
    },
    {
      id: 3,
      primaryColor: "#2A5CB9",
      secondaryColor: "#EDF1F8",
      image: nikkah,
      headingText: "Shop Nikkah Templates",
      text: "Browse through venues, catering, decor & more with our most economical platform for make your dream wedding comes true.",
      btnTextColor: "#fff",
    },
  ];

  const planCardsData2 = [
    {
      id: 4,
      primaryColor: "#2A5CB9",
      secondaryColor: "#EDF1F8",
      image: PlanCard4,
      headingText: "Event Website",
      text: "Browse through venues, catering, decor & more with our most economical platform for make your dream wedding comes true.",
      btnTextColor: "#fff",
      width: "400px",
    },
    {
      id: 5,
      primaryColor: "#F5C989",
      secondaryColor: "#FDF4E7",
      image: checklist,
      headingText: "Checklist Creation",
      text: "Browse through venues, catering, decor & more with our most economical platform for make your dream wedding comes true.",
      btnTextColor: "#000",
      width: "80px",
    },

    {
      id: 6,
      primaryColor: "#FA5856",
      secondaryColor: "#FEE7E6",
      image: PlanCard6,
      headingText: "Guest List/RSVP",
      text: "Browse through venues, catering, decor & more with our most economical platform for make your dream wedding comes true.",
      btnTextColor: "#fff",
    },
  ];

  return (
    <div className="flex flex-wrap justify-evenly p-5 ">
      {planCardsData?.map((e, i) => (
        <PlanCards
          key={e.id}
          primaryColor={e.primaryColor}
          secondaryColor={e.secondaryColor}
          image={e.image}
          headingText={e.headingText}
          text={e.text}
          btnTextColor={e.btnTextColor}
        />
      ))}
      <div></div>
      {planCardsData2?.map((e, i) => (
        <PlanCards
          key={e.id}
          primaryColor={e.primaryColor}
          secondaryColor={e.secondaryColor}
          image={e.image}
          headingText={e.headingText}
          text={e.text}
          btnTextColor={e.btnTextColor}
        />
      ))}
    </div>
  );
};

export default Plan;

// const Plan = () => {
//   return (
//     <>
//       <Container className="mb-5">
//         <Row className="my-5">
//           <Col md={12}>
//             <div className={`text-center ${styles.plan}`}>
//               <h5>WE got the best tools for your event, so hop on</h5>
//               <h1>Tools that make Wedding Plan simple</h1>
//             </div>
//           </Col>
//           <Col lg={4} md={6} sm={6} xs={6}>
//             <MyCard
//               // imgsrc={imageone}
//               path="/Vendor"
//               imgsrc={arabian2}
//               head="Vendor Search"
//               para="Browse through venues, catering, decor & more
//                     with our most economical platform for make your dream
//                     wedding comes true."
//               btn="Search Vendor"
//             />
//           </Col>
//           <Col lg={4} md={6} sm={6} xs={6}>
//             <MyCardYellow
//               imgsrc="/../assests/home_img/temp1.svg"
//               head="Event Website"
//               para="Browse through venues, catering, decor & more with our most economical platform for make your dream wedding comes true."
//               btn="Create Free Site"
//               path="/event"
//             />
//           </Col>
//           <Col lg={4} md={6} sm={6} xs={6}>
//             <MyCardBlue
//               imgsrc={invitation}
//               head="Shop Invitation Card"
//               para="Browse through venues, catering, decor & more with our most economical platform for make your dream wedding comes true."
//               btn="Browse Invitation"
//               path="/shop-invitation"
//             />
//           </Col>
//           <Col lg={4} md={6} sm={6} xs={6}>
//             <MyCardBlue
//               imgsrc={nikkah}
//               head="Nikkah Template"
//               para="Browse through venues, catering, decor & more
//                     with our most economical platform for make your dream
//                     wedding comes true."
//               btn="Browse Card"
//               path="/template"
//             />
//           </Col>
//           <Col lg={4} md={6} sm={6} xs={6}>
//             <MyCardYellow2
//               imgsrc={checklist}
//               // imgsrc2={checklist}
//               head="Checklist Creation"
//               para="Browse through venues, catering, decor & more
//                     with our most economical platform for make your dream
//                     wedding comes true."
//               btn="Start Planning"
//               path="/template"
//             />
//           </Col>
//           <Col lg={4} md={6} sm={6} xs={6}>
//             <MyCardOne
//               imgsrc="/../assests/home_img/Download.svg"
//               head="Guest List/RSVP"
//               para="Browse through venues, catering, decor & more
//                     with our most economical platform for make your dream
//                     wedding comes true."
//               btn="Rsvp Invites"
//               path="/Rsvp"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };
