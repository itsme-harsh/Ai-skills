import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  HttpCode, 
  HttpStatus,
  ParseUUIDPipe
} from '@nestjs/common';
// import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'; // Uncomment if using Swagger
// import { __ServiceName__Service } from './__service-file-name__.service';
// import { Create__EntityName__Dto } from './dto/create-__entity-name__.dto';
// import { Update__EntityName__Dto } from './dto/update-__entity-name__.dto';
// import { __EntityName__ResponseDto } from './dto/__entity-name__-response.dto';

// @ApiTags('__EntityName__s')
@Controller('api/v1/__entity-route__')
export class __ServiceName__Controller {
  constructor(private readonly __serviceInstanceName__: __ServiceName__Service) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  // @ApiOperation({ summary: 'Create a new __EntityName__' })
  // @ApiResponse({ status: 201, type: __EntityName__ResponseDto })
  public async create(
    @Body() createDto: Create__EntityName__Dto
  ): Promise<__EntityName__ResponseDto> {
    return this.__serviceInstanceName__.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  // @ApiOperation({ summary: 'Retrieve all __EntityName__s' })
  // @ApiResponse({ status: 200, type: [__EntityName__ResponseDto] })
  public async findAll(): Promise<__EntityName__ResponseDto[]> {
    return this.__serviceInstanceName__.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  // @ApiOperation({ summary: 'Retrieve a specific __EntityName__ by ID' })
  // @ApiResponse({ status: 200, type: __EntityName__ResponseDto })
  public async findOne(
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<__EntityName__ResponseDto> {
    return this.__serviceInstanceName__.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  // @ApiOperation({ summary: 'Update a specific __EntityName__' })
  // @ApiResponse({ status: 200, type: __EntityName__ResponseDto })
  public async update(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateDto: Update__EntityName__Dto
  ): Promise<__EntityName__ResponseDto> {
    return this.__serviceInstanceName__.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  // @ApiOperation({ summary: 'Delete a specific __EntityName__' })
  // @ApiResponse({ status: 204, description: 'Successfully deleted' })
  public async remove(
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<void> {
    await this.__serviceInstanceName__.remove(id);
  }
}