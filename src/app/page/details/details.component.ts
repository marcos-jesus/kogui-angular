import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IListDetail } from 'src/app/interfaces/list-detail';
import { ListItensService } from 'src/app/services/dashboard/list-itens.service';
import { LoaderService } from 'src/app/services/loading/loader.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  loading$ = this._Loader.loading$
  persons$ = new Observable<IListDetail>()

  constructor(
    private route: ActivatedRoute,
    private _Loader: LoaderService,
    private _ListService: ListItensService,
  ) { }

  ngOnInit(): void {
    this.getPerson()
  }


  getPerson() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.persons$ = this._ListService.getItem(id)
  }

}
