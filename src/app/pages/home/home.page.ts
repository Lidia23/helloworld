import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonMenuButton,
  IonMenu,
  IonButtons,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { CircleButtonsComponent } from 'src/app/components/circle-buttons/circle-buttons.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { addIcons } from 'ionicons';
import {
  logoApple,
  settingsSharp,
  star,
  qrCode,
  qrCodeOutline,
  card,
  wallet,
  addCircle,
  bus,
  bagHandle,
  fastFood,
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonMenuButton,
    IonMenu,
    IonButtons,
    IonItem,
    IonLabel,
    IonList,
    SearchbarComponent,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    CircleButtonsComponent,
    CarouselComponent,
  ],
})
export class HomePage {
  constructor() {
    addIcons({
      qrCodeOutline,
      card,
      wallet,
      addCircle,
      logoApple,
      settingsSharp,
      star,
      qrCode,
      bus,
      bagHandle,
      fastFood,
    });
  }
}
