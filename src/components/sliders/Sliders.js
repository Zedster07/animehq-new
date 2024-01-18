import { IonImg } from '@ionic/react';
import styled from 'styled-components';

const MainSlider = styled.div(props => ({
  backgroundImage: props.backgroundImage,
  backgroundSize:"130%",
  backgroundPosition:"top right",
  backgroundRepeat:"no-repeat",
  height: '100vh',
  width: '100%',
  '@media (max-width: 880px)': {
    backgroundSize: "300%",
    backgroundPosition: "top center",
    height: '80vh',
  },
}));

const MainSliderWrapper = styled.div(props => ({
  background: "rgb(0,0,0)",
  background: "linear-gradient(180deg, rgba(18,18,18,0.1) 0%, rgba(18,18,18,0.1) 52%, rgba(18,18,18,1) 100%)",
  height:"100%",
  width:"100%",
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  height: '100vh',
  '@media (max-width: 880px)': {
    height: '80vh',
    background: "linear-gradient(180deg, rgba(18,18,18,0.1) 0%, rgba(18,18,18,0.1) 80%, rgba(18,18,18,1) 100%)",
  },
}));

const MainSliderTitleImg = styled(IonImg)`
    width:450px;
    @media (max-width: 880px) {
        width:170px;
    }
`;

const MainSliderContent = styled.div`
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(18,18,18,0.1) 0%, rgba(18,18,18,0.1) 52%, rgba(18,18,18,1) 100%);
    background: linear-gradient(90deg, rgba(18,18,18,0.2) 0%, rgba(18,18,18,0.2) 52%, rgba(18,18,18,1) 100%);
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-end;
    padding:0 70px;
    gap:15px;
    @media (max-width: 880px) {
        padding:0 30px;
        gap:8px;
        align-items:center;
        justify-content:flex-end;
        background: linear-gradient(180deg, rgba(18,18,18,0.2) 0%, rgba(18,18,18,0.2) 7%, rgba(18,18,18,1) 100%);
    }
  `;

const MainSliderTitle = styled.h1`
    font-size:4rem;
    font-family:'Cairo';
    @media (max-width: 768px) {
        font-size:2.2rem;
    }
`;

const MainSliderButtons = styled.div`
    display:flex;
    gap:15px;
`;

const PrimaryButton = styled.button`
    padding:20px 20px;
    font-size:1.5rem;
    background: rgb(252,176,69);
    background: rgba(238,167,66,1);
    border-radius:15px;
    font-family:'Cairo';
    display:flex;
    justify-content: center;
    align-items: center;
    gap:15px;
    @media (max-width: 768px) {
        font-size:1rem;
        padding:10px 10px;
        border-radius:8px;
    }
`;

const SecondaryButton = styled.button`
    padding:20px 20px;
    font-size:1.5rem;
    background: rgba(238,167,66,0);
    border-radius:15px;
    font-family:'Cairo';
    display:flex;
    justify-content: center;
    align-items: center;
    gap:15px;
    @media (max-width: 768px) {
        font-size:1rem;
        padding:0px 5px;
    }
    &:hover {
        color:rgb(238,167,66);
        cursor:pointer;
        transition: 0.5s ease;
    }
`;

const MainSilderDetails = styled.div`
    display:flex;
    font-size:1.2rem;
    gap:15px;
    font-family:'Cairo';
    align-items: center;
    @media (max-width: 768px) {
        font-size:0.7rem;
        padding:0px 5px;
    }
`;

const MainSliderDescription = styled.p`
    font-family:'Cairo';
    font-size:1.1rem;
    max-width:600px;
    text-align:right;
    @media (max-width: 768px) {
        font-size:0.8rem;
        height:100px;
        overflow:hidden;
        display:none;
    }
`;
export {
    MainSlider,
    MainSliderDescription,
    MainSliderWrapper,
    MainSliderContent,
    MainSliderTitle,
    PrimaryButton,
    SecondaryButton,
    MainSliderButtons,
    MainSilderDetails,
    MainSliderTitleImg
};