import Carousel from '../components/carousel/Carousel';


const images = [
  "https://wakatime.com/share/@018ca02c-ab88-4ea4-9e74-48688ac3bbec/734d666a-cd86-496a-be0c-495fa1bf54bc.png",
  "https://wakatime.com/share/@018ca02c-ab88-4ea4-9e74-48688ac3bbec/6375db9e-880e-43d6-ba88-88e4c85dd4b5.png",
  "https://wakatime.com/share/@018ca02c-ab88-4ea4-9e74-48688ac3bbec/160b5310-ac51-4976-9863-8ea67d5fd043.png"
];

function DashboardPage() {
  return <Carousel images={images}></Carousel>
}

export default DashboardPage;
