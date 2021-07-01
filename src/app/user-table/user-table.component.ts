import { Component, OnInit } from '@angular/core';
import { AternityService } from '../services/aternity.service';
import { IUser } from './../commons/interfaces/User';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  user: IUser[];
  displayedColumns: string[] = ['name', 'email', 'company name'];
  dataSource: any = [];

  constructor(private aternityService: AternityService, private router: Router) {}

  ngOnInit(): void {
    this.aternityService.getUsers().subscribe((res) => {
      this.user = res;
      this.dataSource = new MatTableDataSource(this.user);
    });
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goToPosts(userId) {
    this.router.navigate(['user/posts'], { queryParams: { userID: userId }});
  }
}
