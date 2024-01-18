import { IonIcon } from '@ionic/react';
import styled from 'styled-components';

const PostersType1Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    gap:15px;
    padding: 0 70px;
    direction:rtl;
    * {
        font-family:'Cairo';
    }

    @media (max-width: 880px) {
        padding: 0 10px;
    }
`;

const PostersType1ContainerTitle = styled.h1`
    color: white;
    font-size:2rem;
    @media (max-width: 880px) {
        font-size:1.5rem;
    }
`;

const PostersType1ContainerSlider = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    width:100%;
    gap:15px;
    &::-webkit-scrollbar {
        display: none;
    }
    overflow-x:auto;
    @media (max-width: 880px) {
        gap:10px;
    }
`;

const PosterType1 = styled.div`
    width:288px;
    height:515px;
    display:flex;
    flex-direction:column;
`;

const PosterType1Img = styled.div(props => ({
    backgroundImage: `url(${props.bg})`,
    backgroundColor:"orange",
    backgroundSize:"cover",
    backgroundPosition:"center",
    width: "288px",
    minHeight:"400px",
    borderRadius:"15px",
    padding:"15px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    position:"relative",
    gap:"15px",
    transition:"0.4s ease",
    "&:hover > *":{
        opacity:"1"
    },
    "@media (max-width: 880px)": {
        borderRadius:"10px",
        minHeight:"240px",
        width:"170px",
        gap:"3px"
    }
}));

const PosterType1Details = styled.div`
    display:flex;
    flex-direction:column;
    h1 {
        font-size:1.2rem;
    }

    @media (max-width: 880px) {
        h1 {
            font-size:1rem;
        }
    }
    
`;

const PosterType1DetailsInfo = styled.div`
    display:flex;
    gap: 10px;
    color: gray;
    align-items:center;
    font-size:0.9rem;
    @media (max-width: 880px) {
        font-size:0.65rem;
    }
`;

const PosterType1PlayIconContainer = styled.div`
    width:100%;
    height:300px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    opacity:0;
    transition: 0.4s ease;
`;

const PosterType1AddWatchListButton = styled.button`
    width:100%;
    padding:12px;
    border-radius:5px;
    background-color: rgba(50, 50, 50, 0.4);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(8px);
    transition: 0.4s ease;
    position:relative;
    bottom: 0px;
    opacity:0;
    &:hover{
        background-color: rgb(238,167,66);
        bottom: 10px;
        display:block;
        transition: 0.4s ease;
    }
`;


const PlayIcon = styled(IonIcon)`
    font-size: 60px;
    text-shadow: 2px 1px 7px rgba(206,89,55,0.99);
    background-color: rgba(50, 50, 50, 0.4);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(8px);
    border-radius:100%;
    transition: 0.4s ease;
    &:hover {
        cursor:pointer;
        background-color: rgb(238,167,66);
        transition: 0.4s ease;
    }
`;
export {
    PostersType1Container,
    PostersType1ContainerTitle,
    PostersType1ContainerSlider,
    PosterType1,
    PosterType1Img,
    PosterType1Details,
    PosterType1PlayIconContainer,
    PosterType1AddWatchListButton,
    PlayIcon,
    PosterType1DetailsInfo
}