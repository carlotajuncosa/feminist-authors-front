import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorsService } from './../../services/authors.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss'],
})
export class ContributeComponent implements OnInit {
  authorsForm!: FormGroup;
  newAuthor: any = {
    name: '',
    birthdate:'',
    deathdate:'',
    nationality: '',
    ocupation: '',
    zodiacSign:'',
    authorImg:'',
    mostAwardWork:{
      title:'',
      img:'',
    }
  };

  authorForm!: FormGroup;

  constructor(
    private authorsService: AuthorsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authorForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      birthdate:['', [Validators.required]],
      deathdate: '',
      nationality:['', [Validators.required]],
      ocupation:['', [Validators.required]],
      zodiacSign:['', [Validators.required]],
      authorImg:['', [Validators.required]],
      title:['', [Validators.required]],
      img:['', [Validators.required]],
    })
    this.authorForm.valueChanges.subscribe((changes) => {
      this.newAuthor = changes;
    });
  }
  onFileChange(event:any){
    const file = event.target.files[0];
    const file1 = event.target.files[1];

    console.log(file);
    this.authorForm.patchValue({
      authorImg: file,
      img: file1
    })
  }
  

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.authorForm.get('name')?.value);
    formData.append('birthdate', this.authorForm.get('birthdate')?.value);
    formData.append('deathdate', this.authorForm.get('deathdate')?.value);
    formData.append('nationality', this.authorForm.get('nationality')?.value);
    formData.append('ocupation', this.authorForm.get('ocupation')?.value);
    formData.append('zodiacSign', this.authorForm.get('zodiacSign')?.value);
    formData.append('authorImg', this.authorForm.get('authorImg')?.value);
    formData.append('title', this.authorForm.get('title')?.value);
    formData.append('img', this.authorForm.get('img')?.value);
    console.log(formData);
    this.authorsService.postAuthor(formData).subscribe(() => this.router.navigate(['/authors']));
  }
}
