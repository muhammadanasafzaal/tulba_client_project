import React, { useState } from "react";
import style from "styles/layout/header.module.scss";
import tulbalogo from "public/assests/Headerlogo.svg";
import cart from "public/assests/cart.svg";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Button from "components/form/button";
import MyVerticallyCenteredModal from "components/popup/profile_popup";
import Sidebar from "layout/sidebar";
import Link from "next/link";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import searchIcon from "public/assests/searchIcon.svg";
import closeIcon from "public/assests/close.svg";
import "bootstrap/dist/css/bootstrap.css";
import userprofile from 'public/assests/header/userprofile.png'

const Header = () => {
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    // <Container fluid className='px-5'>
    <Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className={`${style.Header_section} w-full`}>
        <div className={style.nested_header}>
          <div
            className={`flex items-center justify-between  ${style.header_top}`}
          >
            <div className={`${style.reg_date} my-2`}>
              <p>7 Shaaban 1443AH &nbsp;</p>
              <p> |&nbsp; Thursday , 10 March 2022</p>
            </div>
            <Link href="/vendors/signup" style={{ background: 'red' }} className={`${style.headerTop_vendor}`}>
              <span className="d-xs-none" style={{ color: "#333 !important", textTransform: 'uppercase', cursor: 'pointer' }}>Are You A Vendor? </span>
            </Link>
            {/* <div className={`${style.headerTop_vendor} d-xs-none`}  >
            </div> */}
            {/* <div
              className={style.headerTop_vendor}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Link href="/Vendor">
                <a
                  style={{
                    textDecoration: "none !important",
                    color: "black",
                  }}
                >
                  {" "}
                  Are You A Vendor?
                </a>
              </Link>
            </div> */}
          </div>
          {!showSearch ? (
            <Navbar className={style.navbar_style}>
              <div
                className={` flex ${style.header_bottom} items-center justify-between w-full   `}
              >
                <div className="d-xs-flex d-md-none d-sm-none d-lg-none">
                    <div className={`${style.user_image_container}`}>
                      {/* <Image
                        // className={style.user_image_container}
                        alt="user"
                        src={userprofile}
                        style={{ height: 100, width: 100  }}
                        width={100}
                        height={100}
                      /> */}
                      <div className={style.cart_img} >
                        <Image
                          alt="user"
                          src={cart}
                        />
                      </div>
                    </div>
                  <Link href="signup">
                    <div className={`${style.user_image_container} ml-2`} >
                      {/* <Image
                        // className={style.user_image_container}
                        alt="user"
                        src={userprofile}
                        style={{ height: 100, width: 100  }}
                        width={100}
                        height={100}
                      /> */}
                      <div className={style.user_img} >
                        <Image
                          alt="user"
                          src={userprofile}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={style.logo} >
                  <Link href="/">
                    <Image
                      src={tulbalogo}
                      alt="tulbalogo"
                      loading="lazy"
                      className="h-12 w-12"
                    />
                  </Link>
                </div>
                <div
                  className={`flex  gap-2 !sm:hidden !md:hidden ${style.mobile}`}
                >
                  <ul className={`flex items-center ${style.ui_list}`}>
                    <li className={style.vendros}>
                      <span className="flex gap-1 items-center">
                        <Link href="/vendors">Vendors</Link> <IoIosArrowDown />
                      </span>{" "}
                      <ul className={style.nav__submenu}>
                        <li className={style.nav__submenu_item}>
                          <Link href={"/shop-invitation"}>Catering</Link>
                        </li>
                        <li className={style.nav__submenu_item}>
                          <Link href={"/Rsvp"}>Decoration</Link>
                        </li>

                        <li className={style.nav__submenu_item}>
                          <Link href={"/checkout"}>Florist</Link>
                        </li>
                        <li className={style.nav__submenu_item}>
                          <Link href={"/checkout"}>Venue</Link>
                        </li>
                      </ul>
                    </li>
                    <li className={style.planning_tools}>
                      <span className="flex gap-1 items-center">
                        <Link href="/event">Planning Tools</Link>{" "}
                        <IoIosArrowDown />
                      </span>
                      <ul className={style.nav__submenu}>
                        {/* <li className={style.nav__submenu_item}>
                      <a>Events</a>
                    </li> */}
                        <li className={style.nav__submenu_item}>
                          <Link href={"/checklist"}>Checklist</Link>
                        </li>
                        <li className={style.nav__submenu_item}>
                          <Link href={"/Rsvp"}>Rsvp</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/event-website">Event Website</a>
                    </li>
                    <li>
                      <Link href={"/shop-invitation"}>Shop Invitation</Link>
                    </li>
                    <li>
                      <Link href={"/nikkah-templates"}>Nikkah Template</Link>
                    </li>
                  </ul>
                  <div className={style.btn_header2}>
                    <Link href={"/login"}>
                      <Button value={"Log in"} />
                    </Link>
                  </div>
                  <div className={style.btn_header}>
                    <Link href={"/signup"}>
                      <Button value={"Sign up"} />
                    </Link>
                  </div>
                  <div className={style.searchIcon}>
                    <Image
                      alt="search"
                      src={searchIcon}
                      onClick={() => setShowSearch(!showSearch)}
                    />
                  </div>
                  {/* Cart */}
                  <div className="flex align-items-center justify-center">
                    <div
                      onClick={() => setOpen(true)}
                      className={`${open
                        ? style.menu_btn
                        : `${style.menu_btn} ${style.menu_btn} `
                        }`}
                      style={{
                        padding: "0px !important",
                        marginBottom: "0",
                        //marginBottom: "30px",
                      }}
                    >
                      <div className={style.menu_childSidebar}></div>
                    </div>
                    <div
                      onClick={() => setModalShow(true)}
                      className={`cursor-pointer ${style.cart} `}
                    >
                      <Image
                        src={cart}
                        className={style.cartImage}
                        alt="cart"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Navbar>
          ) : (
            <div className={style.searchContainer}>
              <div>
                <input placeholder="Search" className="appearance-none" />
              </div>
              <div
                className={style.closeIcon}
                onClick={() => setShowSearch(!showSearch)}
              >
                <Image
                  alt="close"
                  src={closeIcon}
                  onClick={() => setShowSearch(!showSearch)}
                />
              </div>
            </div>
          )}
        </div>
        <div className={style.sidebar_option}>
          <Sidebar setOpen={setOpen} open={open} />
        </div>
      </div>
    </Container>
  );
};

export default Header;

// import React, { useState } from "react";
// import style from "styles/layout/header.module.scss";
// import tulbalogo from "public/assests/Headerlogo.svg";
// import cart from "public/assests/cart.svg";
// import Image from "next/image";
// import { IoIosArrowDown } from "react-icons/io";
// import Button from "components/form/button";
// import MyVerticallyCenteredModal from "components/popup/profile_popup";
// import Sidebar from "layout/sidebar";
// import Link from "next/link";
// import { Container, Row, Col } from "react-bootstrap";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     // <Container fluid className='px-5'>
//     <Container>
//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//       {/* <div className={`  ${style.Header_section} w-full border-2 border-black`}> */}
//       <div className={`  ${style.Header_section} `}>
//         <div className={style.nested_header}>
//           <div
//             className={`flex items-center justify-between  ${style.header_top}`}
//           >
//             <div className={`${style.reg_date} flex items-center gap-3`}>
//               <p>7 Shaaban 1443AH &nbsp;</p>
//               <p> |&nbsp; Thurasday , 10 March 2022</p>
//             </div>
//             {/* <div className={style.headerTop_vendor}  onClick={() => setModalShow(true)}>Are You A Vendor? */}
//             {/* </div> */}
//             <div className={style.headerTop_vendor} style={{ textDecoration: 'none', color: "black" }} ><Link href="/Vendor"><a style={{ textDecoration: 'none !important', color: "black" }} > Are You A Vendor?</a></Link>
//             </div>
//           </div>

//           <div
//             className={`flex items-center justify-between ${style.header_bottom}`}
//           >
//             <div>
//               <Link href="/">
//                 <Image
//                   src={tulbalogo}
//                   alt="tulbalogo"
//                   loading="lazy"
//                 // className="h-12 w-12"
//                 />
//               </Link>
//             </div>
//             <div className={`flex  gap-2`}>
//               <ul className={`flex items-center ${style.ui_list}`}>
//                 <li className={style.vendros}>
//                   <span className="flex gap-1 items-center">
//                     <Link href="/Vendors">Vendors</Link> <IoIosArrowDown />
//                   </span>{" "}
//                   <ul className={style.nav__submenu}>
//                     <li className={style.nav__submenu_item}>
//                       <Link href={"/shop-invitation"}>Wedding Store</Link>
//                     </li>
//                     <li className={style.nav__submenu_item}>
//                       <Link href={"/Rsvp"}>Rsvp</Link>
//                     </li>
//                     <li className={style.nav__submenu_item}>
//                       <Link href={"/checkout"}>Checkout</Link>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className={style.planning_tools}>
//                   <span className="flex gap-1 items-center">
//                     <Link href="/event">Planning Tools</Link> <IoIosArrowDown />
//                   </span>
//                   <ul className={style.nav__submenu}>
//                     {/* <li className={style.nav__submenu_item}>
//                       <a>Events</a>
//                     </li> */}
//                     <li className={style.nav__submenu_item}>
//                       <a>Reception</a>
//                     </li>
//                     <li className={style.nav__submenu_item}>
//                       <a>Gathering</a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href="#/">Event Website</a>
//                 </li>
//                 <li>
//                   <Link href={"/shop-invitation"} >Shop Invitation</Link>
//                 </li>
//                 <li>
//                   <a href="#/">Nikkah Templates</a>{" "}
//                 </li>
//               </ul>
//               <div className={style.btn_header}>
//                 <Link href={"/loginin"}>
//                   <Button value={"Log in"} />
//                 </Link>
//               </div>
//               <div className={style.btn_header}>
//                 <Link href={"/signup"}>
//                   <Button value={"Sign up"} />
//                 </Link>
//               </div>
//               {/* Cart */}
//               <div onClick={() => setModalShow(true)} className={`cursor-pointer ${style.cart}`}>
//                 <Image src={cart} alt="cart" loading="lazy" />
//               </div>
//             </div>
//             <div
//               onClick={() => setOpen(true)}
//               className={`${open ? style.menu_btn : `${style.menu_btn} ${style.menu_btn}`
//                 }`}
//             >
//               <div className={style.menu_childSidebar}></div>
//             </div>
//           </div>
//           {/* <button onClick={() => setOpen(!open)}>Click</button> */}
//         </div>
//         <div className={style.sidebar_option}>
//           <Sidebar setOpen={setOpen} open={open} />
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Header;