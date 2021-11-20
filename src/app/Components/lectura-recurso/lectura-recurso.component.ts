import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CosasService } from 'src/app/services/cosas.service';

@Component({
  selector: 'app-lectura-recurso',
  templateUrl: './lectura-recurso.component.html',
  styleUrls: ['./lectura-recurso.component.css']
})
export class LecturaRecursoComponent implements OnInit {
titulo: String = "Información Recursos";
id: string | null;
createCosa: FormGroup;
NombreRecurso: String = "";
Contenido: String = "";
  constructor(private fb: FormBuilder, private cosaService: CosasService, private toastr: ToastrService,private router: Router, private aRoute: ActivatedRoute) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.createCosa = this.fb.group({
      NombreRecurso: ['', Validators.required],
      
      Contenido: ['', Validators.required],
      
  });
}

  ngOnInit(): void {
    this.esLeer();
  }

  esLeer() {
    if (this.id !== null) {
      console.log(this.id);
      this.cosaService.getCosa(this.id).subscribe(data => {
        //this.createCosa.setValue({
          this.NombreRecurso= data.payload.data()['Nombre'];
         
          this.Contenido= data.payload.data()['Contenido'];
        //});
      });
    } else {

    }
  }

}
