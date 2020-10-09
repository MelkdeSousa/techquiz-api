import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateQuestionTable1602127567540 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

    await queryRunner.createTable(new Table({
      name: 'Question',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
          isPrimary: true
        },
        {
          name: 'topic',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'description',
          type: 'text'
        },
        {
          name: 'difficulty',
          type: 'enum',
          enum: ['easy', 'medium', 'hard'],
          isNullable: false
        },
        {
          name: 'question',
          type: 'text',
          isNullable: false
        },
        {
          name: 'alternatives',
          type: 'json',
          isNullable: false
        },
        {
          name: 'alternative_correct',
          type: 'enum',
          enum: ['a', 'b', 'c', 'd', 'e', 'f'],
          isNullable: false
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Question')
    await queryRunner.query('DROP EXTENSION "uuid-ossp"')
  }
}
