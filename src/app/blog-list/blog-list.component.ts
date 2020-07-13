import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[] [];
  constructor() { }

  ngOnInit(): void {
    this.blogPosts = 
    [
      [
        {title: 'Post One', summary: 'Summary One', author: 'Author One'},
        {title: 'Post Two', summary: 'Summary Two', author: 'Author Two'},
        {title: 'Post Three', summary: 'Summary Three', author: 'Author Three'},
        {title: 'Post Four', summary: 'Summary Four', author: 'Author Four'}
      ],
      [
        {title: 'Post Five', summary: 'Summary Five', author: 'Author Five'},
        {title: 'Post Six', summary: 'Summary Six', author: 'Author Six'},
        {title: 'Post Seven', summary: 'Summary Seven', author: 'Author Seven'},
        {title: 'Post Eight', summary: 'Summary Eight', author: 'Author Eight'}
      ],
      [
        {title: 'Post Nine', summary: 'Summary Nine', author: 'Author Nine'},
        {title: 'Post Ten', summary: 'Summary Ten', author: 'Author Ten'},
        {title: 'Post Eleven', summary: 'Summary Eleven', author: 'Author Eleven'},
        {title: 'Post Twelve', summary: 'Summary Twelve', author: 'Author Twelve'}
      ]
    ]
  }

}
