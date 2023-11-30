import FAQ from "../../../Components/FAQ/FAQ.JSX";
import LatestSurvey from "../../../Components/LatestSurvey/LatestSurvey";
import SurveyFeature from "../../../Components/SurveyFeature/SurveyFeature";
import Testimonials from "../../../Components/Testimonials/Testimonials";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <SurveyFeature></SurveyFeature>
          <LatestSurvey></LatestSurvey>
          <Testimonials></Testimonials>
          <FAQ></FAQ>
         
        </div>
    );
};

export default Home;