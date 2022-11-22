import { AuthorsService } from './../../../services/authors.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-authors-details',
  templateUrl: './authors-details.component.html',
  styleUrls: ['./authors-details.component.css']
})
export class AuthorsDetailsComponent implements OnInit {
  id?: any;
  myAuthor: any; 

  constructor(private activatedRoute: ActivatedRoute, private authorsService: AuthorsService) { 
    this.activatedRoute.paramMap.subscribe((params) =>{
      this.id = params.get('id');
      console.log(params)

      this.authorsService.getAuthor(this.id).subscribe((data:any) =>{
        this.myAuthor = {...data}
        console.log(this.myAuthor);
        
      })
    })
  }

  ngOnInit(): void {
  }

}
