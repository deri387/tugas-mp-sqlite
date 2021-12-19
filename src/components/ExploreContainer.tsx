import './ExploreContainer.css';
import { IonItem, IonLabel, IonInput, IonButton, IonList, IonListHeader } from "@ionic/react";
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
    <IonItem>
      <IonLabel position="floating">Nomor HP</IonLabel>
      <IonInput value={""}></IonInput>
    </IonItem>
    <IonItem>
      <IonLabel position="floating">Nama</IonLabel>
      <IonInput value={""}></IonInput>
    </IonItem>
    <div style={{display: "flex", alignItems: "center", margin: 10}}>
      <IonButton color="primary">TAMBAH</IonButton>
      <IonButton color="primary">EDIT</IonButton>
      <IonButton color="primary">HAPUS</IonButton>
    </div>
    <IonList>
      <IonListHeader lines="inset">
        <IonLabel>Data Phonebook</IonLabel>
      </IonListHeader>
      <IonItem>
        <IonLabel color="primary">
          <p>Reva Rizkia</p>
          <span>085115123122</span>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel color="primary">
          <p>Deri Komara</p>
          <span>081902420670</span>
        </IonLabel>
      </IonItem>
    </IonList>
  </>
  );
};

export default ExploreContainer;
