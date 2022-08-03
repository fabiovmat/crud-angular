import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, first, of, tap } from 'rxjs';

import { Course } from './../model/course';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  private readonly API = '/assets/courses.json';


  constructor(private HttpClient: HttpClient) {



  }

  list()

        {
          return this.HttpClient.get<Course[]>(this.API)
          .pipe(
            first(),
            delay(1000),
            //tap(courses => console.log(courses) ),
            //catchError(error => { console.log(error); return of([]) })
          );

        //teste
        //{"_id" : "1",  "name" : "Angular",  "category" : "Front-end"}



    }


}
