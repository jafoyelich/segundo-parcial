import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  pedirPermiso() {
    if (!('Notification' in window)) {
      alert('Este navegador no soporta notificaciones.');
      return;
    }

    Notification.requestPermission().then((perm) => {
      if (perm === 'granted') {
        alert('Permiso concedido. Ya puedes recibir notificaciones.');
      } else {
        alert('Permiso denegado.');
      }
    });
  }

  enviarNotificacion() {
    if (Notification.permission === 'granted') {
      new Notification('🎉 Notificación de prueba', {
        body: 'Esto es una notificación enviada desde Angular.',
        icon: 'assets/icons/icon-192x192.png'
      });
    } else {
      alert('Debes permitir las notificaciones primero.');
    }
  }

}
