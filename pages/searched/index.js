import axios from "axios";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Top from "../../components/Top/Top";

export default function Searched(props) {
  return (
    <div className="container mx-auto">
      <Header />
      <Top searched={props.data.results} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const searched = await axios({
      method: "get",
      url: `${process.env.HOST_API}/api/v1/breeds`,
      // responseType: "application/json",
      params: { limit: 10, page: 1, top: true },
    });
    return {
      props: { data: searched.data }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: { data: null, error },
    };
  }
}
