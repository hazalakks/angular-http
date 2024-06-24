import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserModel } from '../models/user-models';
import { MatTableModule } from '@angular/material/table';
import { HeaderTransformPipe } from '../header-transform.pipe';
import { GenderPipe } from '../pipes/gender.pipe'
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../user-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __values } from 'tslib';


@Component({
  selector: 'app-home',
  standalone: true,
  providers: [UserServiceService],
  imports: [HttpClientModule, MatTableModule, HeaderTransformPipe, GenderPipe, CommonModule, UserServiceService, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  users: UserModel[] = []
  displayedColumns: string[] = ["id", "age", "firstName", "lastName", "gender"];
  searchText: string = ""
  constructor(private _userService: UserServiceService) { }

  ngOnInit() {
    this._userService.getAllUsers().subscribe((result: any) => {
      console.log(result)

    })

    this.searchForm.valueChanges.subscribe.(value => {
      this.searchUsers(value)
    })
    serachUSers(text: any){
      this._userService.searchUsers(text).subscribe((result: any) => {
        this.users = result?.users;
      }
    }


    //ngAfterViewInit(){}
    //ngAfterContent(){}

  }
}