import { useRouter } from "next/router";
import axios from "axios";
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";

export default function PostPage(props) {
  console.log(props);
  const router = useRouter();

  return (
    <div className="container mx-auto">
      <Header />
      <Content breed={props.data} />
      <Gallery galleries={props.data.galleries} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const breed = await axios({
      method: "get",
      url: `${process.env.HOST_API}/api/v1/breeds/${context.params.id}`,
      responseType: "application/json",
      // params: { limit: 4, page: 1 },
    });
    console.log(breed);

    return {
      props: { data: breed.data }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error);
    return {
      props: { data: null, error },
    };
  }
}
