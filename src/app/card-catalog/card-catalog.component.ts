import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
import { HttpHeaders } from '@angular/common/http';

import { CardCatalogService } from '../card-catalog/card-catalog.service'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token',
    'x-transaction-id': '1000',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*'
  })
}


@Component({
  selector: 'app-card-catalog',
  templateUrl: './card-catalog.component.html',
  styleUrls: ['./card-catalog.component.css']
})
export class CardCatalogComponent extends AppComponent implements OnInit {

  constructor(
    private cardCatalogService: CardCatalogService
  ) {
    super();
  }

  public responseSchoolDisciplines;




  ngOnInit() {
    this.getDisciplines();
  }

  getDisciplines() {
    return this.cardCatalogService
      .getSchoolDisciplines(httpOptions)
      .subscribe((data: any) =>
        this.responseSchoolDisciplines = data.data,
        error => {
          console.log("Erro na consulta", error)
        },
        () => {
          console.log(this.responseSchoolDisciplines)
        }
      );
  }




}
/* const objctDisciplines =
{
  "data": [
    {
      "schoolDisciplineDescription": "Matemática",
      "id": "390bdd5b-e6b5-4ea1-b457-75ef44a08c04",
      "schoolDiscipline": "Matemática"
    },
    {
      "schoolDisciplineDescription": "teste",
      "id": "d5e0ea0f-9c88-4a0a-8af1-a7984d0a827c",
      "schoolDiscipline": "tee"
    },
    {
      "schoolDisciplineDescription": "Test",
      "id": "3b323d2c-9ec4-4202-8038-f375ea6a5e4f",
      "schoolDiscipline": "Test"
    },
    {
      "schoolDisciplineDescription": "Test",
      "id": "0577fffc-bdb4-4879-9e22-dac87f3f570b",
      "schoolDiscipline": "Test"
    },
    {
      "schoolDisciplineDescription": "Test",
      "id": "c16eef81-42c3-4220-b567-2f94da862837",
      "schoolDiscipline": "Test"
    },
    {
      "schoolDisciplineDescription": "Test",
      "id": "fe921432-977a-4f35-a3ef-bcb3b3271faf",
      "schoolDiscipline": "Test"
    },
    {
      "schoolDisciplineDescription": "Test",
      "id": "3c449e9b-9631-40b9-b88b-b5be5cdbf1cf",
      "schoolDiscipline": "Test"
    },
    {
      "schoolDisciplineDescription": "Test",
      "id": "c3e1121d-9ff3-446f-b6bd-4f9f55162beb",
      "schoolDiscipline": "Test"
    },
    {
      "schoolDisciplineDescription": "Test",
      "id": "7388ef08-beb2-43bb-b667-957815cc3915",
      "schoolDiscipline": "Test"
    },
    {
      "schoolDisciplineDescription": "Test",
      "id": "9b534f4b-714c-4e3e-9caf-9bff72e3e17f",
      "schoolDiscipline": "Test"
    }
  ]
}; */