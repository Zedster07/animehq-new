import { IonAvatar, IonChip, IonContent, IonIcon, IonItem, IonList } from "@ionic/react";
import { Logo, MobileMenu, MobileMenuContainer, MobileMenuList } from "./NavBar";
import { Label, List } from "../standards";
import { addCircle, caretBackOutline, caretForwardOutline, logIn, mail, personAdd } from "ionicons/icons";

const MobileMenuUser = () => {
return <MobileMenu contentId="main-content" menuId="UserMobileMenu">
            <IonContent className="ion-padding">
                <MobileMenuContainer>
                    <IonChip>
                        <IonAvatar>
                            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                        <Label>حسابي</Label>
                    </IonChip>
                    <List style={{width:"100%"}}>
                       <IonItem button slot="header" color="light"  >
                            <IonIcon icon={logIn} slot="start" />
                            <Label>تسجيل الدخول</Label>
                        </IonItem>
                        <IonItem button  slot="header" color="light" >
                            <IonIcon icon={addCircle} slot="start" />
                            <Label>حساب جديد</Label>
                        </IonItem>
                        <IonItem button  slot="header" color="light" >
                            <IonIcon icon={mail} slot="start" />
                            <Label>إتصل بنا</Label>
                        </IonItem>
                    </List>

                </MobileMenuContainer>
                
            </IonContent>
        </MobileMenu>
}

export default MobileMenuUser;