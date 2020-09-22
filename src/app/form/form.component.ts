import { Component, OnInit } from '@angular/core';
import { Blog } from '../interfaces/blog';
import { BlogsService } from '../services/blogs.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  blog: Blog = {
  title: null,
  image: null,
  body: null,
  type: null,
  date: null
  };
  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
  }
  
  saveBlog() {
   this.blogsService.save(this.blog).subscribe((data) => {     
       alert('Publicación creada');
       console.log(data);
    }, (error) => {
       console.log(error);
       alert('Error de creación');      
    });    
  }
  
}
