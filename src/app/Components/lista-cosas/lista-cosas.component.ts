import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
  listaCosas: Observable<any[]> | any;
  cosas: any[] = [];
  asignaturas: any[] = [];
  asignaturasMap: Map<String, number> = new Map<String, number>();

  constructor(firestore: AngularFirestore, private _cosaService: CosasService, private toastr: ToastrService) {
    this.listaCosas = firestore.collection('Recursos').valueChanges();

  }

  ngOnInit(): void {
    this.getCosas();
    this.getCantidades();
  }
  getCosas() {

    this._cosaService.getCosas().subscribe(
      data => {
        this.cosas = [];
        data.forEach((element: any) => {
          let NombreA: any = null;
          this._cosaService.getAsignatura(element.payload.doc.data()['Asignatura']).subscribe(data => {

            NombreA = data.payload.data()['Nombre'];

            this.cosas.push({
              id: element.payload.doc.id,
              asignaturaNombre2: NombreA,
              ...element.payload.doc.data()
            });

          });


          // console.log(element.payload.doc.data()['Asignatura']);
          // var asignaturaNombre2 = "";

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

  getCantidades() {
    this._cosaService.getAsignaturas().subscribe(
      data => {
        console.log("recorriendo asign");
        this.asignaturas = [];
        data.forEach((element: any) => {
          console.log("prueba: " + element.payload.doc.data()['Nombre']);
          var elemento = {
            nombre: element.payload.doc.data()['Nombre'],
            cantidad: 0
          }
          this.asignaturas.push(elemento);
          
        });
        console.log(this.asignaturas);
        this._cosaService.getCosas().subscribe(
          data => {
            this.cosas = [];
            data.forEach((element: any) => {
              var nom = element.payload.doc.data()['Asignatura'];   
              this._cosaService.getAsignatura(element.payload.doc.data()['Asignatura']).subscribe(data => {

               var NombreA = data.payload.data()['Nombre'];
    
               for (let key in this.asignaturas) {
                console.log(this.asignaturas[key]['nombre']);
                console.log("NOMBRE: " + NombreA);
                console.log("NOMBREARREGLO: " +this.asignaturas[key]['nombre'] );
                if(NombreA ===this.asignaturas[key]['nombre']){
                 let objIndex = this.asignaturas.findIndex((obj => obj.nombre === NombreA));
                 this.asignaturas[objIndex].cantidad +=1;
                 
                }
              }
    
              }); 
             
              
            }
            );
          });
      });
      
      /*for (let key in this.asignaturas) {
        console.log("holaaaaaaa");
       var total = this.asignaturas[key].cantidad;
       var division = ~~(total / 2);
         this.asignaturas[key].cantidad = division;
         console.log("total:" +total);
        }
        console.log(this.asignaturas);
      */}
      
  }
