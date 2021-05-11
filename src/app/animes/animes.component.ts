import { Component, OnInit } from '@angular/core';
import { Anime } from './anime';
import { AnimesService } from './animes.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {


  animes: Array<Anime>;

  constructor(private AnimesService: AnimesService) { }




  selected = false;



  ngOnInit() {
    this.getAnimes();
  }

  getAnimes(): void {
    this.AnimesService.getAnimes()
      .subscribe( animes => {
        this.animes = animes;
      });
  }


}
