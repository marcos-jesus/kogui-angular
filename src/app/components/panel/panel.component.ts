import { Component, OnInit, HostListener } from '@angular/core';
import { ListItensService } from 'src/app/services/dashboard/list-itens.service';
import { LoaderService } from 'src/app/services/loading/loader.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit { 
  loading$ = this._Loader.loading$
  page: number = 1

  items: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    created: string;
  }[] = []

  constructor(
    private _Loader: LoaderService,
    private _ListService: ListItensService,
  ) { }

  ngOnInit(): void {
    this.getLists()
  }

  onShowme() {

  }
  
  getLists() {
    this._ListService.getItens(this.page).subscribe(item => this.items = item.results)
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    console.log("Event: ",event)
    console.log('Window scrolled:', window.scrollY);
    // Lógica adicional de scroll aqui
  }
}
