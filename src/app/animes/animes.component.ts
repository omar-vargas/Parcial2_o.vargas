import { Component, OnInit } from '@angular/core';
import { Anime } from './anime';
import { AnimeDetail } from './anime-Detail';
import { AnimesService } from './animes.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {


  animes: Array<AnimeDetail>;

  constructor(private AnimesService: AnimesService) { }

  selectedAnime: Anime;
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


  onSelected(b: Anime): void {
    this.selected = true;
    this.selectedAnime = b;
  }
}
