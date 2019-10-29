import { Component } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { map }  from  'rxjs/operators';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  grupo: any;
  
  constructor(private httpClient: HttpClient) {
    this.grupo = this.httpClient.get('https://raw.githubusercontent.com/jmanuel96/ProyectoJSON/master/ejemplo.json').pipe(map(res => res['results']));
  }
 
}
