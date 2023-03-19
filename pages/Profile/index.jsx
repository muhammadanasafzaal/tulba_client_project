import Footer from "layout/footer";
import Header from "layout/header";
import Banner from "modules/profile/Banner";
import Temp from "modules/profile/Temp";
import "bootstrap/dist/css/bootstrap.css";

const index = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Temp />
      <Footer />
    </div>
  );
};

export default index;
