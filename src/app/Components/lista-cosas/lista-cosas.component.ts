import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-lista-cosas',
  templateUrl: './lista-cosas.component.html',
  styleUrls: ['./lista-cosas.component.css']
})
export class ListaCosasComponent implements OnInit {
  listaCosas: Observable <any[]> | any;

  constructor(firestore: AngularFirestore) {
    this.listaCosas = firestore.collection('Recursos').valueChanges();
   }

  ngOnInit(): void {
  }

}
