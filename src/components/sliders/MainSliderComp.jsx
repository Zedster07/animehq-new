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
import { useEffect, useState } from 'react';

const MainSliderComp = ({slides , autoSlide = false, duration = 1}) => {

  const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
      let timerSlider;
      if(autoSlide) {
        timerSlider = setInterval(() => {
          nextSlide()
        }, duration*1000);
      }
      
      return () => {
        if(autoSlide) {
          clearInterval(timerSlider);
        }
      }
    },[currentSlide])

  return (
    <div className='slider'>
      <div className="slides">
        {
        slides.map((item , index) => 
        <MainSlider key={index} backgroundImage={`url(${item.bg})`} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          {index === currentSlide && (<MainSliderWrapper>
            <MainSliderContent>
              {/* <MainSliderTitle>Sousou no Frieren</MainSliderTitle>
              */}
              <MainSliderTitleImg 
                src={item.titleImg}
              />
              <MainSilderDetails>
                {item.season && <>  
                  <span>{`الموسم ${item.season}`}</span>
                  <IonIcon icon={radioButtonOn} style={{fontSize:"8px"}} />
                </>}
                {item.episode && <>
                  <span>{`الحلقة ${item.episode}`}</span>
                  <IonIcon icon={radioButtonOn} style={{fontSize:"8px"}} />
                </>}
                
                {item.year && <>
                  <span>{item.year}</span>
                  <IonIcon icon={radioButtonOn} style={{fontSize:"8px"}} />
                </>}
                
                {item.rating && <>
                  <span>{item.rating}</span>
                  <IonIcon icon={star} style={{color:"rgba(238,167,66,1)"}} />
                </>}
                
                
              </MainSilderDetails>
              <MainSliderDescription>
                {item.description}
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
          </MainSliderWrapper>)}
    </MainSlider>)
      }
      </div>
      
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
    
  );
};

export default MainSliderComp;
