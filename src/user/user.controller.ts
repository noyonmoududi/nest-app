import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.getAllUser();
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch("/:userId")
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param("userId", ParseIntPipe) userId: number,
  ) {
    return this.userService.update(updateUserDto, userId);
  }

  @Get("/:userId")
  getAUser(@Param("userId", ParseIntPipe) userId: number) {
    return this.userService.getAUser(userId);
  }

  @Delete("/:userId")
  delete(@Param("userId", ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
