import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TypeEventModule } from './typeEvent/typeEvent.module'
import { ServiceModule } from './services/services.module'
import { RolModule } from './role/role.module'
import { QualificationModule }  from './qualification/qualification.module'
import { ProfileModule } from './profile/profile.module'
import { ProductModule } from './product/product.module'
import { PlaceModule } from  './place/place.module'
import { EventModule } from './event/event.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'eventos',
    entities: ['dist/entities/*.js'],
    synchronize: true,
  }),
    UserModule, TypeEventModule, ServiceModule, RolModule, QualificationModule, 
    ProfileModule,ProductModule, PlaceModule, EventModule] ,
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
