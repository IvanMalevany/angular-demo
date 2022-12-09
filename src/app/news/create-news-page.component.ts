import {Component} from '@angular/core';
import {NewsService} from "../services/news.service";
import {UserService} from "../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'create-news-page',
  templateUrl: './create-news-page.component.html',
})
export class CreateNewsPageComponent{

  loading: boolean = false;
  form: FormGroup;

  area: {id: number, name: string}[] = [
    {id: 1, name: 'Sport'},
    {id: 2, name: 'Travel'},
    {id: 3, name: 'Weather'},
    {id: 4, name: 'Other'}
  ]

  constructor(
    public newsService: NewsService,
    public userService: UserService,
  ){
    this.form = new FormGroup({
      'title': new FormControl('', [Validators.required]),
      'body': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'area': new FormControl('', [Validators.required]),
      'conditions_agree': new FormControl('', [Validators.required, Validators.requiredTrue]),
    })
  }

  submit(){
    this.loading = true
    const form = {...this.form.value}
    this.newsService.create(form)
      .subscribe({
        next: (createdNewsId: number) => {
          alert(`Created news id: ${createdNewsId}`)
        },
        error: alert,
        complete: () => this.loading = false
      })
  }
}
