import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { DragonsService } from './dragons.service';
import { dragonDTO } from './dragons.dto';

@Controller('dragons')
export class DragonsController {
    constructor(private readonly service: DragonsService) {}

    @Get()
    getAllDragons() {
        return this.service.getAllDragons();
    }

    @Get(':id')
    getDragon(@Param('id') id: number) {

        return this.service.getDragon(id);
    }

    @Post()
    postDragon(@Body() dragon: dragonDTO) {
        return this.service.postDragon(dragon);
    }

    @Put(':id')
    updateDragon(@Param('id') id: number, @Body() dragon: dragonDTO) {
        return this.service.updateDragon(id, dragon);
    }

    @Delete(':id')
    deleteDragon(@Param('id') id: number) {
        return this.service.deleteDragon(id);
    }

}
