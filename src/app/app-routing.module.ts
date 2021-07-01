import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  { path: '', component: UserTableComponent },
  { path: 'user/posts', component: PostsListComponent},
  { path: 'users', component: UserTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
