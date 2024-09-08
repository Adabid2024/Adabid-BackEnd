import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { UserOutput } from 'src/user/dto/user.output';

@Resolver(() => UserOutput)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Query(() => [UserOutput], { name: 'admins' })
  findAll() {
    return this.adminService.findAll();
  }

  @Query(() => UserOutput, { name: 'admin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.findOne(id);
  }
}
