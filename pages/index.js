import axios from "axios";
import { useState, useEffect, useRef } from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

export default function Home(props) {
  const [filterTerm, setFilterTerm] = useState("");
  const [breedsFiltered, setBreedsFiltered] = useState([]);

  const refDebounce = useRef(null);

  const onChangeHandler = (e) => {
    setFilterTerm(e.target.value);
    clearTimeout(refDebounce.current);

    refDebounce.current = setTimeout(async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_HOST_API}/api/v1/breeds`,
        { params: { term: e.target.value } }
      );
      setBreedsFiltered(response.data.results);
    }, 300);
  };

  return (
    <div className="container mx-auto">
      <Header />
      <Hero
        breeds={props.data.results}
        onChangeHandler={onChangeHandler}
        response={breedsFiltered}
      />
      <About />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const breeds = await axios({
      method: "get",
      url: `${process.env.HOST_API}/api/v1/breeds`,
      // responseType: "application/json",
      params: { limit: 4, page: 1 },
    });
    return {
      props: { data: breeds.data },
    };
  } catch (error) {
    return {
      props: { data: null, error },
    };
  }
}
