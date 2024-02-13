import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { initializeApp } from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private auth: Auth, private firestore: AngularFirestore) {
     initializeApp(environment.firebase); 
  }

  createRoom(roomData: any) {

  }

  joinRoom(roomId: string, userData: any) {
    // Firestore üzerinde bir odaya katılmak için kullanılacak kod buraya gelecek
  }

  getUsersInRoom(roomId: string) {
    // Belirli bir odadaki kullanıcıları getirmek için kullanılacak kod buraya gelecek
  }
}
