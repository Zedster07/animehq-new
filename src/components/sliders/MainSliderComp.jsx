import { MainSlider, 
  MainSliderContent, 
  MainSliderWrapper,
  MainSliderTitle,
  MainSliderButtons,
  PrimaryButton,  
  SecondaryButton,
  MainSilderDetails,
  MainSliderDescription,
  MainSliderTitleImg

} from './sliders';
import { IonIcon, IonImg } from '@ionic/react';
import { bookmarkOutline, playCircleOutline, radioButtonOn, star } from 'ionicons/icons';

const MainSliderComp = ({bg}) => {
  return (
    <MainSlider backgroundImage={bg}>
        <MainSliderWrapper>
          <MainSliderContent>
            {/* <MainSliderTitle>Sousou no Frieren</MainSliderTitle>
             */}
             <MainSliderTitleImg 
              src="https://i.ibb.co/c6m5VyS/sous.png"
             />
            <MainSilderDetails>
              <span>الموسم 2</span>
              <IonIcon icon={radioButtonOn} style={{fontSize:"8px"}} />
              <span>الحلقة 1017</span>
              <IonIcon icon={radioButtonOn} style={{fontSize:"8px"}} />
              <span>2023</span>
              <IonIcon icon={radioButtonOn} style={{fontSize:"8px"}} />
              <span>9.12</span>
              <IonIcon icon={star} style={{color:"rgba(238,167,66,1)"}} />
              
            </MainSilderDetails>
            <MainSliderDescription>
              هُزم ملك الشياطين، وعاد فريق البطل منتصرين إلى الوطن قبل أن ينحل. الساحرة “فريرين“، البطل “هيميل“، الكاهن “هايتير“، والمحارب “إيزن“، يتذكرون رحلتهم التي استمرت لعقد من الزمان مع اقتراب لحظة توديع بعضهم البعض. لكن مرور الوقت مختل
            </MainSliderDescription>
            <MainSliderButtons>
              <SecondaryButton>
                <IonIcon icon={bookmarkOutline} />
                المفضلة
              </SecondaryButton>
              <PrimaryButton>
                <IonIcon icon={playCircleOutline} />
                شاهد الآن
              </PrimaryButton>
            </MainSliderButtons>
          </MainSliderContent>
        </MainSliderWrapper>
    </MainSlider>
  );
};

export default MainSliderComp;
