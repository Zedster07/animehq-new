import { IonLabel, IonList } from '@ionic/react';
import styled from 'styled-components';
const Label = styled(IonLabel)`
    font-family:'Cairo' !important;
    direction:rtl;
`;

const List = styled(IonList)`
    // direction:rtl;
`;


const HomePageContent = styled.div`
    position:relative;
    width:100%;
    height:800px;
    bottom:150px;
    @media (max-width: 880px) {
        bottom:0px;
        top:25px
    }
`;

export {
    Label,
    List,
    HomePageContent
}

