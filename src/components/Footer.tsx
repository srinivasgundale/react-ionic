import React from 'react';
import { IonFooter, IonToolbar, IonTitle } from '@ionic/react';

const Footer: React.FC = () => {
  return (
    <IonFooter>
      <IonToolbar>
        <IonTitle>&copy; 2024 My E-Commerce App</IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
