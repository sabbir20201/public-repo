import FAQ from "../../../Components/FAQ/FAQ.JSX";
import Testimonials from "../../../Components/Testimonials/Testimonials";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Testimonials></Testimonials>
          <FAQ></FAQ>
         
        </div>
    );
};

export default Home;