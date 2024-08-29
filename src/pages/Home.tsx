import React, { useState, useEffect } from 'react';
import { IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/react';
import PageLayout from './../components/PageLayout';
import { fetchProducts } from './../services/api';

const Home: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <PageLayout>
      <IonList>
        {products.map(product => (
          <IonCard key={product.id}>
            <img alt={product.title} src={product.thumbnail} />
            <IonCardHeader>
              <IonCardTitle>{product.title}</IonCardTitle>
              <IonCardSubtitle>${product.price}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{product.description}</IonCardContent>
            <IonButton routerLink={`/product/${product.id}`}>View</IonButton>
          </IonCard>
        ))}
      </IonList>
    </PageLayout>
  );
};

export default Home;
