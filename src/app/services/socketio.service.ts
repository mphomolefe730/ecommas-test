import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  constructor() { }
  socket = io(`${environment.renderApiLink}`);

  // public sendMessage(message) {
  //   this.socket.emit('message', message);
  // }

  // public getNewMessage = () => {
  //   this.socket.on('message', (message) =>{
  //     this.message$.next(message);
  //   });
    
  //   return this.message$.asObservable();
  // };
}
