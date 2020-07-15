import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[] [];
  currentPage: number;
  //@ViewChild('tile') blogPostTileComponent: BlogPostTileComponent;

  @ViewChildren('tile') blogPostTileComponents: QueryList<BlogPostTileComponent>;

  constructor() { }

  ngOnInit(): void {
    this.currentPage = 0;
    this.blogPosts = 
    [
      [
        {title: 'Post 1', summary: 'This is a large summary test in order to test large summary text', author: 'Author 1'},
        {title: 'Post 2', summary: 'This is a large summary test in order to test large summary text', author: 'Author 2'},
        {title: 'Post 3', summary: 'This is a large summary test in order to test large summary text', author: 'Author 3'},
        {title: 'Post 4', summary: 'This is a large summary test in order to test large summary text', author: 'Author 4'}
      ],
      [
        {title: 'Post 5', summary: 'Summary 5', author: 'Author 5'},
        {title: 'Post 6', summary: 'Summary 6', author: 'Author 6'},
        {title: 'Post 7', summary: 'Summary 7', author: 'Author 7'},
        {title: 'Post 8', summary: 'Summary 8', author: 'Author 8'}
      ],
      [
        {title: 'Post 9', summary: 'Summary 9', author: 'Author 9'},
        {title: 'Post 10', summary: 'Summary 10', author: 'Author 10'},
        {title: 'Post 11', summary: 'Summary 11', author: 'Author 11'},
        {title: 'Post 12', summary: 'Summary 12', author: 'Author 12'}
      ],
      [
        {title: 'Post 13', summary: 'Summary 13', author: 'Author 13'},
        {title: 'Post 14', summary: 'Summary 14', author: 'Author 14'},
        {title: 'Post 15', summary: 'Summary 15', author: 'Author 15'},
        {title: 'Post 16', summary: 'Summary 16', author: 'Author 16'}
      ],
      [
        {title: 'Post 17', summary: 'Summary 17', author: 'Author 17'},
        {title: 'Post 18', summary: 'Summary 18', author: 'Author 18'},
        {title: 'Post 19', summary: 'Summary 19', author: 'Author 19'},
        {title: 'Post 20', summary: 'Summary 20', author: 'Author 20'}
      ]
    ]
  }

  updatePage(newPage: number){
    console.log("Event emitted and method executed");
    this.currentPage = newPage;
  }

  expandAll(){
    this.blogPostTileComponents
    .forEach(e => e.showFullSummary());
  }

}
