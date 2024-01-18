import styled from 'styled-components';
import { IonAccordion, IonAccordionGroup, IonIcon, IonImg , IonMenu , IonMenuButton} from "@ionic/react";
const NavBar = styled.div`
    // border: 1px solid white;
    transition: 0.4s ease;
    &.colored {
        transition: 0.4s ease;
        background: #111;
    }
    &.transp {
        transition: 0.4s ease;
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 52%, rgba(0,0,0,0) 100%);
    }

    direction:rtl;
    width: 100%;
    height:80px;
    position:fixed;
    display:flex;
    padding: 30px 70px;
    align-items:center;
    justify-content: space-between;
    @media (max-width: 768px) {
        padding:20px 30px;
    }
`;

const Logo = styled(IonImg)`
    width:150px;
    height:65px;
    @media (max-width: 1080px) {
        width:150px;
        height:auto;
        margin-top:25px;
    }
    @media (max-width: 880px) {
        width:120px;
        height:44px;
        margin:0px;
    }
`; 

const MobileMenu = styled(IonMenu)`
    
`; 

const MenuButton = styled(IonMenuButton)`
    display:none;
    @media (max-width: 880px) {
        display:block;
    }
`; 

const LeftSide = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-start;
    gap:30px;


    @media (max-width: 880px) {
        gap:20px;
        flex-direction:row;
        align-items:center;
    }
`;

const RightSide = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-end;
    gap:50px;
    @media (max-width: 1080px) {
        flex-direction:column;
        gap:10px;
        align-items:flex-start;
        justify-content: center;
    }
`;

const NavButton = styled.button`
    padding:10px 20px;
    font-size:1.2rem;
    background: rgb(252,176,69);
    background: rgba(238,167,66,1);
    border-radius:8px;
    font-family:'Cairo';
    display:flex;
    justify-content: center;
    align-items: center;
    gap:15px;
    transition: 0.5s ease;
    &:hover {
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
        transition: 0.5s ease;
    }

    @media (max-width: 880px) {
        display:none;
    }
`;

 const MobileMenuButton = styled.button`
    padding:10px 20px;
    font-size:1.2rem;
    background:rgb(188 126 36);
    border-radius:5px;
    font-family:'Cairo';
    display:flex;
    justify-content: center;
    align-items: center;
    gap:15px;
    width:100%;
 `;

const NavSearch = styled.input`
    background:rgba(0,0,0,0.2);
    outline:none;
    border:1px solid silver;
    padding: 2px 12px;
    padding-left:35px;
    border-radius:8px;
    font-family:'Cairo';
`;

const NavSearchContainer = styled.div`
    position:relative;
    @media (max-width: 880px) {
        display:none;
    }
`;

const NavSearchContainerMobile = styled.div`
    position:relative;
    display:none;
    width:100%;
    @media (max-width: 880px) {
        display:block;
    }
    input {
        width:100%;
        direction:rtl;
    }
`;

const MobileMenuList = styled.div`
    width:100%;
    direction:rtl;
    border:0.5px solid #444;
    border-radius:8px;
    ion-label {
        font-family:'Cairo';
    }
    &:last-child{
        --background:red;
    }
    
`;

const MobileMenuItem = styled(IonAccordion)`
    background:transparent;
    border-bottom: 0.5px solid #444;
`;


const MobileMenuContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items:flex-end;
    gap:15px;
`;

const NavMenu = styled.ul`
    display:flex;
    gap:40px;
    list-style:none;
    font-family:'Cairo';
    font-weight:bold;
    margin:0px;
    padding:0px;
    position:relative;
    @media (max-width: 880px) {
        display:none;
    }
`;
const NavSubMenu = styled.div`
    min-width:200px;
    max-height:300px;
    border: 1px solid white;
    position:absolute;
    top:60px;
    border-radius:10px;
    background-color: rgba(0, 0, 0, 0.61);
    flex-direction:row;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(8px);
    display:flex;
    column-gap:23px;
    padding:10px;
    flex-wrap: wrap;
    justify-content:flex-start;
    & > * {
        // flex: 1 1 160px;
    }
`;

const NavItem = styled.li`
    transition: 0.5s ease;
    position:relative;
    &:hover > span {
        color:rgb(238,167,66);
        cursor:pointer;
        transition: 0.5s ease;
    }
`;

export {
    NavBar,
    NavSearchContainerMobile,
    LeftSide,
    RightSide,
    NavButton,
    NavSearch,
    NavMenu,
    NavSubMenu,
    NavItem,
    Logo,
    NavSearchContainer,
    MobileMenu,
    MenuButton,
    MobileMenuContainer,
    MobileMenuList,
    MobileMenuItem,
    MobileMenuButton
};