import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { initializeApp } from "firebase/app";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor() {
     AngularFireModule.initializeApp(environment.firebase);
  }

  createRoom(roomData: any) {
      console.log(roomData);
  }

  joinRoom(roomId: string, userData: any) {
    // Firestore üzerinde bir odaya katılmak için kullanılacak kod buraya gelecek
  }

  getUsersInRoom(roomId: string) {
    // Belirli bir odadaki kullanıcıları getirmek için kullanılacak kod buraya gelecek
  }
}
