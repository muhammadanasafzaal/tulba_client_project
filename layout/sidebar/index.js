import style from "styles/layout/sidebar.module.scss";
import classes from "styles/layout/header.module.scss";
import Button from "components/form/button";
import logo from "public/assests/tulbalogo.svg";
import Image from "next/image";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import searchIcon from "public/assests/searchIcon.svg";
const Sidebar = ({ setOpen, open }) => {
  const router = useRouter();
  const [vendors, setVendors] = useState(false);
  const [planningTools, setPlanningTools] = useState(false);

  const handleSubMenu1 = () => {
    setOpen(false);
    router.push("/shop-invitation");
  };
  const handleSubMenu2 = () => {
    setOpen(false);
    router.push("/rsvp");
  };
  const handleSubMenu3 = () => {
    setOpen(false);
    router.push("/checkout");
  };
  const handleSubMenu4 = () => {
    // setOpen(false)
    // router.push('/checkout')
  };

  return (
    <div>
      <div
        className={`${style.sidebar} ${open == true ? `${style.active}` : ""}`}
      >
        <div
          className={`${style.headerTop_vendor} px-4 pt-3`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Link href="/login">
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
        </div>
        <div className={`${style.sd_header} pb-0`}>
          <div className="mt-2" style={{ width: '100px', height: 'auto' }}>
            <Image
              src={logo}
              alt="tulbalogo"
              loading="lazy"
              className="h-6 w-6"
            />
          </div>
          <div className={style.cros_btn} onClick={setOpen}>
            <ImCross />
            {/* <div>  <Image src={cart} alt="cart" loading="lazy" /></div> */}
          </div>
        </div>
        <div className={style.sd_body}>
          <div className={style.mainItem}>
            <div className={style.menu}>
              <div className={style.item} >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 20, padding: 10, width: '100%' }} >
                  <Image
                    alt="search"
                    src={searchIcon}
                  />
                  <p style={{ fontSize: 14, marginLeft: 5 }} >Search gifts, vendors, couples...</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.mainItem}>
            <div className={style.menu}>
              <Link href="/vendors">
                <a className={style.item}>Vendors </a>
              </Link>
              <div
                onClick={() => {
                  setVendors(!vendors);
                }}
              >
                {" "}
                <IoIosArrowDown style={{ color: "red" }} />
              </div>
            </div>
            {vendors && (
              <div className={style.submenu}>
                <Link href="/vendors">
                  <div>Catering</div>
                </Link>
                <Link href="/vendors">
                  <div>Decoration</div>
                </Link>
                <Link href="/vendors">
                  <div>Florist</div>
                </Link>
                <Link href="/vendors">
                  <div>Venue</div>
                </Link>
              </div>
            )}
          </div>

          <div className={style.mainItem}>
            <div className={style.menu}>
              <Link href="/event">
                <a className={style.item}>Planning Tools </a>
              </Link>
              <div
                onClick={() => {
                  setPlanningTools(!planningTools);
                }}
              >
                {" "}
                <IoIosArrowDown style={{ color: "red" }} />
              </div>
            </div>
            {planningTools && (
              <div className={style.submenu}>
                <Link href="/checklist">
                  <div >Check List</div>
                </Link>
                <Link href="/rsvp">
                  <div>RSVP</div>
                </Link>
              </div>
            )}
          </div>

          <div className={style.mainItem}>
            <div className={style.menu}>
              <Link href="/event-website">
                <a className={style.item}>Event Website </a>
              </Link>
            </div>
          </div>

          <div className={style.mainItem}>
            <div className={style.menu}>
              <Link href="/shop-invitation">
                <a className={style.item}>Shop Invitation </a>
              </Link>
            </div>
          </div>

          <div className={style.mainItem}>
            <div className={style.menu}>
              <Link href="/nikkah-templates">
                <a className={style.item}>Shop Nikkah Templates </a>
              </Link>
            </div>
          </div>

        </div>
      </div>
      <div
        className={`${style.sidebar_overlay} ${open == true ? `${style.active}` : ""
          }`}
        onClick={setOpen}
      ></div>
    </div>
  );
};

export default Sidebar;

{
  /* 
           <ul className={`flex items-center ${classes.ui_list}`}>
            <li className={classes.vendros}>
              <span className="flex gap-1 items-center">
                <Link href="/Vendors">Vendors</Link> <IoIosArrowDown />
              </span>{" "}
              <ul className={classes.nav__submenu}>
                <li className={classes.nav__submenu_item}>
                  <Link href={"/shop-invitation"}>Wedding Store</Link>
                </li>
                <li className={classes.nav__submenu_item}>
                  <Link href={"/Rsvp"}>Rsvp</Link>
                </li>
                <li className={classes.nav__submenu_item}>
                  <Link href={"/checkout"}>Checkout</Link>
                </li>
              </ul>
            </li>
            <li className={classes.planning_tools}>
              <span className="flex gap-1 items-center">
                <Link href="/event">Planning Tools</Link> <IoIosArrowDown />
              </span>
              <ul className={classes.nav__submenu}>
              
                <li className={classes.nav__submenu_item}>
                  <a>Reception</a>
                </li>
                <li className={classes.nav__submenu_item}>
                  <a>Gathering</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#/">Event Website</a>
            </li>
            <li>
              <Link href={"/shop-invitation"}>Shop Invitation</Link>
            </li>
            <li>
              <a href="#/">Nikkah Templates</a>{" "}
            </li>
          </ul>  */
}

// setOpen, open

// <ul className={`flex items-center ${style.ui_list}`}>
//                   <li className={style.vendros}>
//                     <span className="flex gap-1 items-center">
//                       <Link href="/Vendors">Vendors</Link> <IoIosArrowDown />
//                     </span>{" "}
//                     <ul className={style.nav__submenu}>
//                       <li className={style.nav__submenu_item}>
//                         <Link href={"/shop-invitation"}>Wedding Store</Link>
//                       </li>
//                       <li className={style.nav__submenu_item}>
//                         <Link href={"/Rsvp"}>Rsvp</Link>
//                       </li>
//                       <li className={style.nav__submenu_item}>
//                         <Link href={"/checkout"}>Checkout</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className={style.planning_tools}>
//                     <span className="flex gap-1 items-center">
//                       <Link href="/event">Planning Tools</Link>{" "}
//                       <IoIosArrowDown />
//                     </span>
//                     <ul className={style.nav__submenu}>
//                       {/* <li className={style.nav__submenu_item}>
//                       <a>Events</a>
//                     </li> */}
//                       <li className={style.nav__submenu_item}>
//                         <a>Reception</a>
//                       </li>
//                       <li className={style.nav__submenu_item}>
//                         <a>Gathering</a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="#/">Event Website</a>
//                   </li>
//                   <li>
//                     <Link href={"/shop-invitation"}>Shop Invitation</Link>
//                   </li>
//                   <li>
//                     <a href="#/">Nikkah Templates</a>{" "}
//                   </li>
//                 </ul>
