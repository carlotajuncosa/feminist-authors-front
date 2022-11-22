import { IAuthors } from './../../models/interfaces';
import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  myAuthors?: any[];

  constructor(private authorsservice: AuthorsService) {
    this.authorsservice.getAllAuthors().subscribe((data: any) => {
      console.log(data);

      const authorsData: any[] = data.map((author: IAuthors) => ({
        id: author._id,
        name: author.name,
        birthdate: author.birthdate,
        deathdate: author.deathdate,
        ocupation: author.ocupation,
        zodiacsign: author.zodiacsign,
        image: author.authorImg,
        mostAwardWork: author.mostAwardWork,
      }));

      this.myAuthors = [...authorsData];
    });
  }

  ngOnInit(): void {}
}
