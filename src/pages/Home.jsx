import Hero from "../component/Hero.jsx";
import CardGrid from "../component/Cardgrid.jsx";
import features from "../data/features.js";

function Home() {
  return (
    <div>
      <Hero />
      <CardGrid features={features} />
    </div>
  );
}

export default Home;