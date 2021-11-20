import { AngularFirestore } from '@angular/fire//compat/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CosasService {
  constructor(private firestore: AngularFirestore) { }
  agregarCosa(Recurso: any): Promise<any>{
    return this.firestore.collection('Recursos').add(Recurso);
  }
getCosas(): Observable<any>{
    return this.firestore.collection('Recursos').snapshotChanges();
  }
  eliminarCosa(id: string): Promise<any>{
    return this.firestore.collection('Recursos').doc(id).delete();
  }
  getCosa(id:string) : Observable<any>{
    return this.firestore.collection('Recursos').doc(id).snapshotChanges();
  }
  editarCosa(id: string, data:any): Promise<any>{
    return this.firestore.collection('Recursos').doc(id).update(data);
  }
  getAsignaturas(): Observable<any>{
    return this.firestore.collection('Asignaturas').snapshotChanges();
  }
  getAsignatura(id:string) : Observable<any>{
    console.log("en el service: " + id);
    return this.firestore.collection('Asignaturas').doc(id).snapshotChanges();
    
  }




}
