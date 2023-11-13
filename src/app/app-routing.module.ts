import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BooksComponent } from './components/books/books.component';
import { IndexComponent } from './components/index/index.component';
import { MediaComponent } from './components/media/media.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  {path: "",component: HomeComponent},
  {path: "home",component: HomeComponent},
  {path: "about",component: AboutComponent},
  {path: "books",component: BooksComponent},
  {path: "index",component: IndexComponent},
  {path: "edia",component: MediaComponent},
  {path: "**",component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
