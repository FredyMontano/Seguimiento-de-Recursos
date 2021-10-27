import { CosasService } from './../../services/cosas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-nueva-cosa',
    templateUrl: './nueva-cosa.component.html',
    styleUrls: ['./nueva-cosa.component.css']
})
export class NuevaCosaComponent implements OnInit {
    createCosa: FormGroup;
    enviado = false;
    constructor(private fb: FormBuilder, private cosaService: CosasService) {
        this.createCosa = this.fb.group({
            NombreRecurso: ['', Validators.required],
            Asignatura: ['', Validators.required],
            TipoRecurso: ['', Validators.required],
            Contenido: ['', Validators.required]
        }
        );
    }
    ngOnInit(): void {
    }
    agregarCosa() {
        this.enviado = true;
        if (this.createCosa.invalid) {
            return;
        }
        const cosa: any = {
            NombreRecurso: this.createCosa.value.NombreRecurso,
            Asignatura: this.createCosa.value.Asignatura,
            TipoRecurso: this.createCosa.value.TipoRecurso,
            Contenido: this.createCosa.value.Contenido
        }
        this.cosaService.agregarCosa(cosa).then(() => {
            console.log("registro exitoso");
        }).catch(error => {
            console.log(error);
        })
    }
}

