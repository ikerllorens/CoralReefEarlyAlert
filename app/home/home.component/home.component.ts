import { Component, OnInit } from '@angular/core';

import { MdlSnackbarService } from 'angular2-mdl';

import { HomeService } from '../home.service/home.service';

import { HomeResponse } from '../../classes/HomeResponse/HomeResponse';
import { PostData, PhotoInformation } from '../../classes/PostData/PostData'

@Component({
  selector: 'home',
  templateUrl: 'app/home/home.component/home.component.html',
  providers: [ HomeService ],
  styleUrls: ['app/home/home.component/home.component.css']
})

export class HomeComponent implements OnInit{
  public posts: Array<PostData> = []

  constructor(private homeService: HomeService, private mdlSnackbarService: MdlSnackbarService) {

  }

  ngOnInit() {
    this.homeService.getPosts().subscribe((homeResponse: HomeResponse) => {
      if(homeResponse.success) {
        this.posts = homeResponse.datos as Array<PostData>;
        for (let post of this.posts) {
          if(post.fotos.length == 0) {
            post.fotos.push(new PhotoInformation("/img/cea.png"));
          }
        }
      } else {
        console.error('Could not fetch because: ' + homeResponse.reason);
        this.mdlSnackbarService.showSnackbar({
          message:'Hubo un error inesperado',
          action:{
            handler:()=>{
              //this.mdlSnackbarService.showToast('You hit the ok Button');
            },
            text: 'OK'
          }
        });
      }
    })
  }
}
