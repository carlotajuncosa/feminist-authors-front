import { WavesService } from './../../services/waves.service';
import { Component, OnInit } from '@angular/core';
import { IWaves } from 'src/app/models/interfaces';

@Component({
  selector: 'app-waves',
  templateUrl: './waves.component.html',
  styleUrls: ['./waves.component.css']
})
export class WavesComponent implements OnInit {
  myWaves?: any[];

  constructor(private wavesservice: WavesService) { 
  this.wavesservice.getAllWaves().subscribe((data: any) => {
    console.log(data);

    const wavesData: any[] = data.map((wave: IWaves) => ({
      wave: wave.wave,
      century:  wave.century,
      description: wave.description,
      img: wave.img,
   }));
   this.myWaves = [...wavesData];
  });
}
  ngOnInit(): void {
  }

}
