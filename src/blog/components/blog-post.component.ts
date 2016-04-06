import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {FetchingComponent} from '../../shared/components/fetching/fetching.component';
import {IBlogPost} from '../models';


@Component({
  selector: 'blog-post',
  template: require('./blog-post.component.html'),
  styles: [require('./blog-post.component.scss')],
  directives: [FetchingComponent, ROUTER_DIRECTIVES],
})
export class BlogPostComponent {
  @Input() post: IBlogPost = null;
}