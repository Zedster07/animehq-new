import { IonContent, IonHeader, IonIcon, IonImg, IonMenuButton, IonMenuToggle } from "@ionic/react";
import { LeftSide, NavBar, NavButton, NavSearch, RightSide,NavMenu,NavItem, Logo, NavSearchContainer, MobileMenu, MenuButton, NavSubMenu } from "./NavBar";
import { personCircleOutline, search } from "ionicons/icons";
import { useEffect } from "react";

const NavBarComp = ({pscroll}) => {
    useEffect(() => {
        console.log(pscroll);
    },[pscroll])
    return <NavBar className={pscroll <= 0 ? 'transp' : 'colored'}>
        <RightSide>
            <Logo
                src="https://animhq.com/wp-content/themes/animhq/Interface/images/LOGO2.png"
                alt="Logo"/>
            <NavMenu>
                <NavItem>
                    <span>أفلام</span>

                    {/* <NavSubMenu>
                        <NavItem>
                            <span>اكشن</span>
                        </NavItem>
                        <NavItem>
                            <span>دراما</span>
                        </NavItem>
                        <NavItem>
                            <span>مغامرة</span>
                        </NavItem>
                        <NavItem>
                            <span>رعب</span>
                        </NavItem>
                        <NavItem>
                            <span>رومنسية</span>
                        </NavItem>


                    </NavSubMenu> */}
                </NavItem>
                <NavItem><span>مسلسلات</span></NavItem>
                <NavItem><span>مدبلج</span></NavItem>
                <NavItem><span>أطفال</span></NavItem>
                <NavItem><span>مجاني</span></NavItem>
                
            </NavMenu>
        </RightSide>
        <LeftSide>
            <NavSearchContainer>
                <NavSearch
                    placeholder="البحث عن فلم أو مسلسل"
                />
                <IonIcon icon={search} style={{position:"absolute",left:"10px",top:"8px",fontSize:"20px"}} />
            </NavSearchContainer>
            <IonMenuToggle menu="UserMobileMenu">
                <IonIcon icon={personCircleOutline} style={{fontSize:"1.8rem"}} />
            </IonMenuToggle>
            
            <MenuButton />
            
            <NavButton>
                 إشتراك VIP
            </NavButton>

        </LeftSide>
    </NavBar>
}


export default NavBarComp;