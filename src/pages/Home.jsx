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
        <MainSliderComp bg="url(https://images6.alphacoders.com/134/1346791.png)" />
        <HomePageContent>
          <PostersType1 title="أعلى التقييمات" posters={topRated} />
        </HomePageContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
