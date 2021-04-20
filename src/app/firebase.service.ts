import { Injectable } from '@angular/core';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { History } from './history';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  private historyUrl = 'https://foodjournal-c4a3e.firebaseio.com/food.json';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore
    ) { }

  getFood() {
    return this.firestore.collection('food').snapshotChanges();
  }

  getFood2(): Observable<History[]> {
    return this.http.get<History[]>(this.historyUrl);
  }
}
