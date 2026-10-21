import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './products/products.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ProductsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(
      {
        imports: [ConfigModule],
        inject: [ConfigService],

        useFactory: (configService: ConfigService) => (
          {
            type: 'postgres',
            host: configService.get<string>('DB_HOST'), 
            port: configService.get<number>('DB_PORT'), 
            username: configService.get<string>('DB_USERNAME'), 
            password: configService.get<string>('DB_PASSWORD'), 
            database: configService.get<string>('DB_DATABASE'), 
            autoLoadEntities: true, 
            synchronize: true,
          }
        )
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
