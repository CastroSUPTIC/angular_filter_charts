import { ServicesService } from './services.service';
import { Component } from '@angular/core';
import { cMunicipios } from 'src/app/classes/municipios';
import { DadosDoMunicipio } from 'src/app/classes/dadosMunicipios';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private servicesService: ServicesService) {}

  listMunicipios: cMunicipios[] = [];
  municipioMarcado?: string;
  municipioEscolhido?: number;
  municipioDados: DadosDoMunicipio = {};
  informacoesLista: [] = [];

  ngOnInit() {
    this.servicesService.getMunicipios().subscribe((data) => {
      this.listMunicipios = data;
      // console.log(this.listMunicipios);
    });
  }

  getMunicipioDetalhes(municipioCodigo: any) {
    this.servicesService
      .getMunicipioPorCodigo(municipioCodigo)
      .subscribe((data) => {
        this.municipioDados = data;
        console.log(data);
      });
  }
}
