import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

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

  constructor(private blogDataService: BlogDataService) { }

  ngOnInit(): void {
    this.currentPage = 0;
    this.blogPosts = this.blogDataService.getBlogData();
    
  }

  updatePage(newPage: number){
    console.log("Event emitted and method executed");
    this.currentPage = newPage;
  }

  expandAll(){
    this.blogPostTileComponents
    .forEach(e => e.showFullSummary());
  }

  favAll(){
    this.blogPosts[this.currentPage] = 
      this.blogPosts[this.currentPage]
          .map(post => ({
            title: post.title,
            summary: post.summary,
            author: post.author,
            isFav: true
          }));
  }

}

