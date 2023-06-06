import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entity/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async getAllUser() {
    return await this.userRepository.find();
  }

  async getAUser(userId: number) {
    return await this.userRepository.findOne({ where: { id: userId } });
  }
  async getAUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }
  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }
  async update(updateUserDto: UpdateUserDto, userId: number) {
    return await this.userRepository.update(userId, updateUserDto);
  }

  async delete(userId: number) {
    return await this.userRepository.delete(userId);
  }
}
