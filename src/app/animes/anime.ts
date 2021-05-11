import { Platform } from "./platform";
export class Anime {
  id: number;
  name: string;

  gender: string;
  image: string;
  score: number;
  platforms: Platform[];

    constructor( id: number,
      name: string,

      gender: string,
      image: string,
      score: number,platforms :Platform[] ){

        this.id=id;

      this.name= name;
      this.gender=  gender
      this.image=  image;
      this.score=score;
      this.platforms= platforms;



    }

}
