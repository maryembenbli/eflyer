import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  user!:User;
  constructor(activatedRoute:ActivatedRoute,private router:Router,private userService:UserService){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm) this.searchTerm =params.searchTerm;
    });

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  logout(){
   this.userService.logout();
  }

  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+term);
  }

  get isAuth(){
   return this.user.token;
 }

 
}
