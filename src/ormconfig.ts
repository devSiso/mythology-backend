import {ConnectionOptions} from 'typeorm';

const config: ConnectionOptions = {
    type: 'mysql',
    host: 'database',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'mythology',
    migrations: ['migrations/*.js'],
    migrationsRun: true,
    logging: true,
    logger: 'file',
    cli: {
      migrationsDir: "src/migrations",
    },
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
  }

  export = config;