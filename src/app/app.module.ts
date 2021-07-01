import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { UserTableComponent } from './user-table/user-table.component';
import { AternityService } from './services/aternity.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { PostsListComponent } from './posts-list/posts-list.component';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { AddPostComponent } from './add-post/add-post.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [AppComponent, PageLayoutComponent, UserTableComponent, PostsListComponent, AddPostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AternityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
