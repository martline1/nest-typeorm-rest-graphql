import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BlogsService } from './blogs.service';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';

@Resolver('Blog')
export class BlogsResolver {
  constructor(private readonly blogsService: BlogsService) {}

  @Mutation('createBlog')
  create(@Args('createBlogInput') createBlogInput: CreateBlogInput) {
    return this.blogsService.create(createBlogInput);
  }

  @Query('blogs')
  findAll() {
    return this.blogsService.findAll();
  }

  @Query('blog')
  findOne(@Args('id') id: number) {
    return this.blogsService.findOne(id);
  }

  @Mutation('updateBlog')
  update(@Args('updateBlogInput') updateBlogInput: UpdateBlogInput) {
    return this.blogsService.update(updateBlogInput.id, updateBlogInput);
  }

  @Mutation('removeBlog')
  remove(@Args('id') id: number) {
    return this.blogsService.remove(id);
  }
}
