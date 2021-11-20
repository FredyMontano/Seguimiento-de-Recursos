import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CosasService } from 'src/app/services/cosas.service';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-lista-cosas',
  templateUrl: './lista-cosas.component.html',
  styleUrls: ['./lista-cosas.component.css']
})
export class ListaCosasComponent implements OnInit {
  listaCosas: Observable <any[]> | any;
  cosas: any[] = [];

  constructor(firestore: AngularFirestore, private _cosaService: CosasService, private toastr: ToastrService) {
    this.listaCosas = firestore.collection('Recursos').valueChanges();
    
   }

  ngOnInit(): void {
    this.getCosas();
  }
  getCosas() {

    this._cosaService.getCosas().subscribe(
      data => {
        this.cosas = [];
        data.forEach((element: any) => {
          let NombreA: any = null;
           this._cosaService.getAsignatura(element.payload.doc.data()['Asignatura']).subscribe(data => {
           
            NombreA= data.payload.data()['Nombre'];
              console.log(NombreA);
              
          });
          
           
          // console.log(element.payload.doc.data()['Asignatura']);
         // var asignaturaNombre2 = "";
         var prueba = NombreA;
         console.log("prueba " + NombreA);
          this.cosas.push({
            id: element.payload.doc.id,
            asignaturaNombre2: NombreA,
            ...element.payload.doc.data()
          });
          console.log(NombreA);
        });
        console.log(this.cosas);
      }
    );
  }
  eliminarCosa(id: string) {
    this._cosaService.eliminarCosa(id).then(() => {
      console.log('cosa eliminada con éxito');
      this.toastr.error('registro eliminado', 'cosa eliminada', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    });
  }


  

}
