import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private httpclient: HttpClient) {}

  municipiosURL = environment.municipiosURL;

  getMunicipios(): Observable<any> {
    return this.httpclient.get(`${this.municipiosURL}municipios`);
  }

  getMunicipioPorCodigo(municipioCodigo: number): Observable<any> {
    return this.httpclient.get(`${this.municipiosURL}${municipioCodigo}`);
  }
}
