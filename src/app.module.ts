import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

// Import Own Modules
import { UsersModule } from './components/users/users.module';
import { BlogsModule } from './components/blogs/blogs.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    // GraphQL Support
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      // false in production
      debug: true,
      playground: true,
    }),

    // TypeORM Support (MySQL)
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      autoLoadEntities: true,

      // Don't forget to set synchronize to false in production
      synchronize: true,
    }),
    UsersModule,
    BlogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
