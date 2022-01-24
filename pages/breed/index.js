import React from "react";
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";

const Detail = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Content />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Detail;
