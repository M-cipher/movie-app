import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

const routes: Routes = [
  { path: "", redirectTo:"home" ,pathMatch:"full" },
  { path: "home", canActivate:[AuthGuard], component: HomeComponent },

  { path: "movies", canActivate: [AuthGuard], component: MoviesComponent },
  { path: "tvShow", canActivate: [AuthGuard], component: TvShowsComponent },
  { path: "people", canActivate: [AuthGuard], component: PeopleComponent },
  { path: "about", canActivate: [AuthGuard], component: AboutComponent },
  { path: "details/:id/:type", canActivate: [AuthGuard], component: MovieDetailsComponent },

  { path: "network", canActivate: [AuthGuard], component: NetworkComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },

  {path:"setting", loadChildren:()=> import('./setting/setting.module').then((res)=>res.SettingModule)},

  { path: "**", component: NotFoundComponent },


];
// https://routeegypt.com/#/home
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
