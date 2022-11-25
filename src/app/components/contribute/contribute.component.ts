import { AuthorsService } from './../../services/authors.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAuthors } from 'src/app/models/interfaces';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {
  newAuthor: IAuthors ={
    name: '',
    birthdate: '',
    deathdate: '',
  };
  authorsForm!: FormGroup;
  
  constructor(private authorService: AuthorService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.authorForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      birthdate: ['', [Validators.required, Validators.minLength(3)]],
      deathdate: ['', [Validators.required]],
  
    })

    this.authorsForm.valueChanges.subscribe((changes) => {
      this.newAuthor = changes;
    })
  }

}


/* export class NewCharacterComponent implements OnInit {
  newCharacter: any = {
    name: '',
    race: '',
    img: '',
  };
  characterForm!: FormGroup;

  constructor(private characterService: CharactersService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.characterForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      img: ['', [Validators.required, Validators.minLength(3)]],
      race: ['', [Validators.required]],
    })

    this.characterForm.valueChanges.subscribe((changes) => {
      this.newCharacter = changes;
    })
  }
  onFileChange(event:any){
    const file = event.target.files[0];
    console.log(file)
    this.characterForm.patchValue({
      img: file
    })

  }
 onSubmit() {
    const formData = new FormData();
    formData.append('img', this.characterForm.get('img')?.value);
    formData.append('name', this.characterForm.get('name')?.value);
    formData.append('race', this.characterForm.get('race')?.value);
    this.characterService.postCharacter(formData).subscribe()
    this.router.navigate(["/characters"])
  }
}

 */