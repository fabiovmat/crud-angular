import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {


  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location

    ) {

    this.form = this.formBuilder.group({

      name:[null],
      category: [null]

    });


   }

   ngOnInit(): void {
    //const course: Course = this.route.snapshot.data['course'];
    //this.form.setValue({
      //_id: course._id,
      //name: course.name,
      //category: course.category
    //});
  }

  onSubmit() {
    this.service.save(this.form.value)
     .subscribe(result => this.onSuccess(), error => this.onError());
  }
  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }

  onCancel(){
    this.location.back();

  }

}
