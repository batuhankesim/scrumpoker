import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-create-room',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule, MatInputModule,MatButtonModule],
  templateUrl: './create-room.component.html',
  styleUrl: './create-room.component.css',
})

export class CreateRoomComponent {
  roomName: string = '';

  constructor(private firebaseService: FirebaseService) { }

  onSubmit() {
    if (this.roomName.trim()) {
      // Firestore servisi aracılığıyla oda oluşturma işlemini gerçekleştir
      this.firebaseService.createRoom({ name: this.roomName });
      // Formu sıfırla
      this.roomName = '';
    }

  }

}
