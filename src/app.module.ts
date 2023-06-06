import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { User } from "./user/entity/user.entity";
import { UserModule } from "./user/user.module";
import { ProfileModule } from './profile/profile.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "",
      password: "",
      database: "nestjs_demo",
      entities: [User],
      synchronize: true, //only use in development
    }),
    AuthModule,
    ProfileModule,
  ],
})
export class AppModule {}
