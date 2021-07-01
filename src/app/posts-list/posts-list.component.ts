import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from '../commons/interfaces/User';
import { AternityService } from './../services/aternity.service';
import { MatDialog } from '@angular/material/dialog';
import { AddPostComponent } from '../add-post/add-post.component';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent {
  userID: number;
  userName: string;
  posts: IPost[];

  constructor(private route: ActivatedRoute, private aternityService: AternityService, public dialog: MatDialog, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.userID = params['userID'];
      this.aternityService.getPostsByUser(this.userID).subscribe(res => {
        this.posts = res;
      })
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPostComponent, { height: '300px', width: '600px'});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const post = {
          title: result.title,
          body: result.body,
          userId: this.userID,
          id: this.posts[this.posts.length - 1].id + 1
        }
        this.aternityService.addPost(post).subscribe(res => {
          this.posts.push(post);
        });
      }
    });
  }

  goBack() {
    this.router.navigate(['users']);
  }
}
