import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonMenu, IonContent } from '@ionic/react';

const Header: React.FC = () => {
  return (
    <>
    <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
      
    </>
  );
};

export default Header;
