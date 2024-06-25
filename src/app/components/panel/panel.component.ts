import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/ilist';
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

  items: Item[] = []

  constructor(
    private _Loader: LoaderService,
    private _ListService: ListItensService,
  ) { }

  ngOnInit(): void {
    this.getLists()
  }
  
  getLists() {
    this._ListService.getItens(this.page).subscribe(item => {
      this.items = [...this.items, ...item.results]
    })
  }

  onScroll() {
    this.page++
    this.getLists();
  }
}
