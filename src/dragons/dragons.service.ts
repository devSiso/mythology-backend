import { Injectable } from '@nestjs/common';
import { Dragons } from './dragons.entity';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { dragonDTO } from './dragons.dto';

@Injectable()
export class DragonsService {
    constructor(@InjectRepository(Dragons) private readonly repository: Repository<Dragons>) {}

    async getAllDragons(): Promise<Dragons[]> {
        return this.repository.find();
    }
    
    async getDragon(id): Promise<Dragons> { 
        return this.repository.findOne({id});
    }

    async postDragon(dragon: dragonDTO): Promise<Dragons> {
        const newDragon = this.repository.create(dragon);
        return this.repository.save(newDragon);
    }

    async updateDragon(id: number, dragon: dragonDTO): Promise<Dragons> {
        const currentDragon = await this.repository.findOneOrFail({id});
        const updatedDragon = {...currentDragon, ...dragon };

        return this.repository.save(updatedDragon);
    }

    async deleteDragon(id: number): Promise<DeleteResult> {
        const currentDragon = await this.repository.findOneOrFail({id});

        return this.repository.delete(currentDragon);
    }
}
