import { CosasService } from './../../services/cosas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({

    selector: 'app-nueva-cosa',
    templateUrl: './nueva-cosa.component.html',
    styleUrls: ['./nueva-cosa.component.css']
})
export class NuevaCosaComponent implements OnInit {
    titulo: string = 'Nuevo Recurso';
    id: string | null;
    createCosa: FormGroup;
    enviado = false;
    listaAsignaturas: Observable<any[]> | any;



    constructor(private fb: FormBuilder, private cosaService: CosasService, private toastr: ToastrService,private router: Router, private aRoute: ActivatedRoute) {
        this.id = this.aRoute.snapshot.paramMap.get('id');
        this.createCosa = this.fb.group({
            NombreRecurso: ['', Validators.required],
            Asignatura: ['', Validators.required],
            TipoRecurso: ['', Validators.required],
            Contenido: ['', Validators.required],

        }

        );
    }
    ngOnInit(): void {
        this.esEditar();
        this.getAsignatura();
    }
    agregarCosa() {
        this.enviado = true;

        if (this.createCosa.invalid) {
          return;
        }

        if (this.id === null) { /** NUEVA COSA */
          const cosa: any = {
            Nombre: this.createCosa.value.NombreRecurso,
            Asignatura: this.createCosa.value.Asignatura,
            TipoRecurso: this.createCosa.value.TipoRecurso,
            Contenido: this.createCosa.value.Contenido

          }

          this.cosaService.agregarCosa(cosa).then(() => {
            console.log("registro exitoso");
            this.toastr.success('La cosa se agregó con éxito a la BD.', 'Cosa registrada', {
              positionClass: 'toast-bottom-right'
            });
            this.router.navigate(["lista-cosas"]);
          }).catch(error => {
            console.log(error);
          });
        }// cierra IF
        else { /** EDITA COSA */
          const cosa: any = {
            Nombre: this.createCosa.value.NombreRecurso,
            Asignatura: this.createCosa.value.Asignatura,
            TipoRecurso: this.createCosa.value.TipoRecurso,
            Contenido: this.createCosa.value.Contenido
          }
          this.cosaService.editarCosa(this.id, cosa).then(() =>
          this.toastr.info('cosa modificada con exito.', 'cosa modificada', {
            positionClass: 'toast-bottom-right'
          })
          );
          this.router.navigate(['lista-cosas']);
        }
      }//cierra agregar cosa

    esEditar() {
        if (this.id !== null) {
          this.titulo = 'Editar Recurso';
          this.cosaService.getCosa(this.id).subscribe(data => {
            this.createCosa.setValue({
              NombreRecurso: data.payload.data()['Nombre'],
              Asignatura: data.payload.data()['Asignatura'],
              TipoRecurso: data.payload.data()['TipoRecurso'],
              Contenido: data.payload.data()['Contenido']
            });
          });
        } else {

        }
      }
      getAsignatura() {

        this.cosaService.getAsignaturas().subscribe(
          data => {
            this.listaAsignaturas = [];
            data.forEach((element: any) => {
              // console.log(element.payload.doc.id);
              // console.log(element.payload.doc.data());
              this.listaAsignaturas.push({
                id: element.payload.doc.id,
                ...element.payload.doc.data()
              })
            });
            console.log(this.listaAsignaturas);
          }
        );
      }

}

