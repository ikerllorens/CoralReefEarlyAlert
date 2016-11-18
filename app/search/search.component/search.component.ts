import { Component, OnInit } from '@angular/core';

import { MdlDefaultTableModel, IMdlTableModelItem, IMdlTableModel } from 'angular2-mdl';

import { SearchService } from '../search.service/search.service';

import { PostData } from '../../classes/PostData/PostData';
import { SearchPostResponse } from '../../classes/SearchData/SearchData';

@Component({
  selector: 'search',
  templateUrl: 'app/search/search.component/search.component.html',
  providers: [SearchService]
})

export class SearchComponent implements OnInit {
  private posts: Array<PostData> = [];
  private totalPages: number = 1;
  public selected = []

  public options = [
    {'id': 2, 'name': 'hola'},
    {'id': 1, 'name': 'no'},
    {'id': 3, 'name': 'waa'},
    {'id': 4, 'name': 'sd'},
    {'id': 5, 'name': 'holsdga'},
    {'id': 6, 'name': 'hofghgla'},
  ]
  public postsTable = new MdlDefaultTableModel([
              {key:'postDate', name:'Fecha', sortable:true},
              {key:'coralType', name:'Tipo', sortable:true, numeric:true},
              {key:'coralSpecies', name:'Especie', sortable:true},
              {key:'sector', name:'Sector', sortable:true},
              {key:'subsector', name:'Subsector', sortable:true},
              {key:'diseases', name:'Enfermedades', sortable:true},
              {key:'bleaching', name:'Blanqueamiento', sortable:true},
              {key:'fotos', name:'Fotos', sortable:true}
              //{key:'observations', name:'Observaciones', sortable:true,},
           ]);

  public constructor(private searchService:SearchService) {

  }

  public ngOnInit() {
    this.searchService.getPosts().subscribe((response: SearchPostResponse) => {
      if(response.success) {
        this.posts = response.datos;
        this.totalPages = response.paginas;
        this.postsTable.addAll(this.posts as [PostData]);
      } else {
        console.error('Could not get posts because: ' + response.reason);
      }
    });
  }
}
