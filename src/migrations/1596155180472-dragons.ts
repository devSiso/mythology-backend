import {MigrationInterface, QueryRunner} from "typeorm";

export class dragons1596155180472 implements MigrationInterface {
    name = 'dragons1596155180472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `dragons` (`id` int NOT NULL, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `dragons`");
    }

}
