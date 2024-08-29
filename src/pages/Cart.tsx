import React from 'react';
import { IonContent, IonPage, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';

const Cart: React.FC = () => {
  // For simplicity, use static data or integrate with your state management
  const cartItems = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 }
  ];

  return (
    <IonPage>
      <IonContent>
        <IonList>
          {cartItems.map(item => (
            <IonItem key={item.id}>
              <IonLabel>
                <h2>{item.name}</h2>
                <p>${item.price}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonButton>Checkout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
