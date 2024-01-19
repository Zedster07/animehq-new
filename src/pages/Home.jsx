import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { MobileMenu, NavBar } from '../components/header/NavBar';
import MainSliderComp from '../components/sliders/MainSliderComp';
import NavBarComp from '../components/header/NavBarComp';
import MobileMenuComp from '../components/header/MobileMenuComp';
import MobileMenuUser from '../components/header/MobileMenuUser';
import { HomePageContent } from '../components/standards';
import PostersType1 from '../components/posters/type1/PostersType1';
import { useEffect, useState } from 'react';

const Home = () => {

  const [topRated, setTopRated] = useState([]);
  const [pageScroll,setPageScroll] = useState(0);
  const [slides, setSlides] = useState([
    {
      bg:"https://staticg.sportskeeda.com/editor/2023/06/8bdea-16880563198836.webp",
      titleImg:"https://i.ibb.co/c6m5VyS/sous.png",
      description:`هُزم ملك الشياطين، وعاد فريق البطل منتصرين إلى الوطن قبل أن ينحل. الساحرة “فريرين“، البطل “هيميل“، الكاهن “هايتير“، والمحارب “إيزن“، يتذكرون رحلتهم التي استمرت لعقد من الزمان مع اقتراب لحظة توديع بعضهم البعض. لكن مرور الوقت مختل


`,
      rating:9.2,
      season: "2",
      episode: 1,
      year:"2022"
    },
    {
      bg:"https://images6.alphacoders.com/134/1346791.png",
      titleImg:"https://cdn.discordapp.com/attachments/1113935399434322031/1195072553677488259/83fe0a84-52d4-4a90-a81f-6ed0a607d966.png",
      description:`هُزم ملك الشياطين، وعاد فريق البطل منتصرين إلى الوطن قبل أن ينحل. الساحرة “فريرين“، البطل “هيميل“، الكاهن “هايتير“، والمحارب “إيزن“، يتذكرون رحلتهم التي استمرت لعقد من الزمان مع اقتراب لحظة توديع بعضهم البعض. لكن مرور الوقت مختل


`,
      rating:8.3,
      season: null,
      year:"2023",
      episode: 2,

    }
  ])
  const fetchTopRated = async () => {
    const result = await fetch("https://animhq.com/wp-content/themes/animhq/api.php",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        req:"getTRNew"
      })
    })

    const dt = await result.json();
    setTopRated(dt);
  };

  useEffect(() => {
    fetchTopRated();
  },[]);
  return (
    <IonPage>
      <MobileMenuComp pscroll={pageScroll} />
      <MobileMenuUser pscroll={pageScroll} />
      <IonHeader>
        <NavBarComp pscroll={pageScroll} />
      </IonHeader>
      <IonContent fullscreen scrollEvents={true} id="main-content" onIonScroll={(e) => {
        setPageScroll(e.detail.scrollTop);
      }}>
        <MainSliderComp slides={slides} autoSlide={true} duration={5} />
        <HomePageContent>
          <PostersType1 title="أعلى التقييمات" posters={topRated} />
        </HomePageContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
