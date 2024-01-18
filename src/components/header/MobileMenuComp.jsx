import { IonAccordion, IonAccordionGroup, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react"
import { Logo, MobileMenu, MobileMenuButton, MobileMenuContainer, MobileMenuItem, MobileMenuList, NavSearch, NavSearchContainerMobile } from "./NavBar"
import { arrowDownCircle, arrowDownCircleOutline, caretBackOutline, caretDownCircle, chevronDownCircle, search } from "ionicons/icons";
import { Label } from "../standards";
import { useEffect, useState } from "react";

const MobileMenuComp = () => {
    const [MItems,setMItems] = useState([
        {
            title:"أفلام",
            link:"#",
            children:[]
        },{
            title:"مسلسلات",
            link:"#",
            children:[]
        }
        ,{
            title:"مدبلج",
            link:"#",
            children:[]
        }
        ,{
            title:"أطفال",
            link:"#",
            children:[]
        },{
            title:"محتوى مجاني",
            link:"#",
            children:[]
        }
    ]);

    const renderItem = (item) => {
        return <IonItem button detail detailIcon={caretBackOutline} slot="header" color="light"  >
                    <Label>{item.title}</Label>
                </IonItem>
    }

    const renderList = (item) => {
        return <MobileMenuItem value={item.title} toggleIcon={chevronDownCircle}>
            <IonItem slot="header" color="rose" lines="none" >
                <Label>{item.title}</Label>
            </IonItem>
            <div slot="content">
                {
                    item.children.map(subItem => {
                        return subItem.children.length > 0 ? 
                            renderList(subItem)
                        : renderItem(subItem);
                    })
                }
            </div>
        </MobileMenuItem>
    }

    useEffect(() => {
        console.log(MItems);
    },[])

    return <MobileMenu contentId="main-content" menuId="MainMobileMenu">
            <IonContent className="ion-padding">
                <MobileMenuContainer>
                    <Logo
                        src="https://animhq.com/wp-content/themes/animhq/Interface/images/LOGO2.png"
                        alt="Logo"
                    />
                    <NavSearchContainerMobile>
                        <NavSearch
                            placeholder="البحث عن فلم أو مسلسل"
                        />
                        <IonIcon icon={search} style={{position:"absolute",left:"10px",top:"8px",fontSize:"20px"}} />
                    </NavSearchContainerMobile>
                    <MobileMenuList onIonChange={() => {}}>
                        {
                            MItems.map(item => {
                                return item.children.length > 0 ? renderList(item) : renderItem(item);
                            })
                        }
                        {/* <MobileMenuItem value="first" toggleIcon={chevronDownCircle}>
                            <IonItem slot="header" color="rose" lines="none" >
                                <Label>أفلام</Label>
                            </IonItem>
                            <div slot="content">
                                <IonItem button detail detailIcon={caretBackOutline} slot="header" color="light"  >
                                    <Label>أفلام الأنمي</Label>
                                </IonItem>
                                <IonItem button detail detailIcon={caretBackOutline} slot="header" color="light" >
                                    <Label>أفلام الأنيميشن</Label>
                                </IonItem>
                                
                            </div>
                        </MobileMenuItem>
                        <MobileMenuItem value="second" toggleIcon={chevronDownCircle}>
                            <IonItem slot="header" color="rose" lines="none">
                                <Label>مسلسلات</Label>
                            </IonItem>
                            <div className="ion-padding" slot="content">
                                First Content
                            </div>
                        </MobileMenuItem>
                        <MobileMenuItem value="third" toggleIcon={chevronDownCircle}>
                            <IonItem slot="header" color="rose" lines="none">
                                <Label>مدبلج</Label>
                            </IonItem>
                            <div className="ion-padding" slot="content">
                                First Content
                            </div>
                        </MobileMenuItem>
                        <MobileMenuItem value="forth" toggleIcon={chevronDownCircle}>
                            <IonItem slot="header" color="rose" lines="none">
                                <Label>أطفال</Label>
                            </IonItem>
                            <div className="ion-padding" slot="content">
                                First Content
                            </div>
                        </MobileMenuItem>
                        <MobileMenuItem value="forth" toggleIcon={chevronDownCircle}>
                            <IonItem slot="header" color="rose" lines="none">
                                <Label>محتوى مجاني</Label>
                            </IonItem>
                            <div className="ion-padding" slot="content">
                                First Content
                            </div>
                        </MobileMenuItem> */}
                    </MobileMenuList>
                    <MobileMenuButton>
                        VIP إشتراك 
                    </MobileMenuButton>
                </MobileMenuContainer>
                
            </IonContent>
        </MobileMenu>
}
export default MobileMenuComp;