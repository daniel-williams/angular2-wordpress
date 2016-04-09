import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {BlogService} from '../blog.service';
import {IBlogPost} from '../models';
import {FetchingComponent} from '../../shared/components/fetching/fetching.component';
import {PagerComponent} from '../../shared/components/pager/pager.component';


@Component({
  selector: 'blog-post-list',
  directives: [FetchingComponent, PagerComponent, ROUTER_DIRECTIVES],
  template: require('./Blog-post-list.component.html'),
  styles: [require('./Blog-post-list.component.scss')],
})
export class BlogPostListComponent {
  posts: IBlogPost[] = [];
  
  constructor(private routeParams: RouteParams, private blogService: BlogService) {
    blogService.setCurrentPage(+(this.routeParams.get('page') || 1));
  }
  
  ngOnInit() {
    this.blogService
      .getPosts()
      .subscribe(posts => this.posts = posts);
  }

}