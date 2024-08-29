import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IonContent, IonPage, IonCard, IonCardContent, IonButton } from '@ionic/react';
import { fetchProductById } from './../services/api'
import PageLayout from './../components/PageLayout';
const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any | null>(null);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <PageLayout>
    
      <IonContent>
      
        <IonCard>
          <IonCardContent>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <IonButton>Add to Cart</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    
    </PageLayout>
  );
};

export default Product;
