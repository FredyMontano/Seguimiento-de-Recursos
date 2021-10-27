import { AngularFirestore } from '@angular/fire//compat/firestore';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CosasService {
  constructor(private firestore: AngularFirestore) { }
  agregarCosa(Recurso: any): Promise<any>{
    return this.firestore.collection('Recursos').add(Recurso);
  }
}
