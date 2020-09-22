import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import { Blog } from '../interfaces/blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs: Blog[];

  constructor(private blogService: BlogsService) { 
     this.getBlogs(); 
  }

  getBlogs() {
     this.blogService.get().subscribe((data: Blog[]) => {     
       this.blogs = data;
    }, (error) => {
       console.log(error);
       alert('Error');      
    });    
  }

  ngOnInit(): void {}

  delete(id){
    this.blogService.delete(id).subscribe((data) => {     
      alert('Publicación Eliminada');
      console.log(data);
      this.getBlogs();
    }, (error) => {
       console.log(error);
       alert('Error');      
    });    
  }
}
