import { Component, OnInit } from '@angular/core';
import { HackersService } from '../../services/hackers.service';

@Component({
  selector: 'app-authors',
  templateUrl: './hackers.component.html',
  styleUrls: ['./hackers.component.scss'],
})
export class HackersComponent implements OnInit {
  myHackers?: any[];

  constructor(private hackersservice: HackersService) {
    this.hackersservice.getAllHackers().subscribe((data: any) => {
      console.log(data);

      const hackersData: any[] = data.map((hacker: any) => ({
        id: hacker._id,
        name: hacker.name,
        description: hacker.description,
        url: hacker.url,
        img: hacker.img,
    
      }));

      this.myHackers = [...hackersData];
    });
  }

  ngOnInit(): void {}
}
