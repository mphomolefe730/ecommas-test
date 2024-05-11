import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private storage:AngularFireStorage,
    private authService:AuthService,
  ) { } 

  async upload($event:any, userId:string, path:string){
    const filePath = await $event?.target?.files[0];
    const upload = await this.storage.upload(`${path}/${userId}`,filePath);
    const url = await upload.ref.getDownloadURL();
    return url;
  }
}
