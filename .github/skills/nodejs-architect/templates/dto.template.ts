import { IsString, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
// import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Create__EntityName__Dto {
  // @ApiProperty({ description: 'The unique identifier (optional on create)' })
  @IsUUID()
  @IsOptional()
  public readonly id?: string;

  // @ApiProperty({ description: 'Example string property' })
  @IsString()
  @IsNotEmpty()
  public readonly name: string;

  // Add other strictly validated properties below
}

export class Update__EntityName__Dto {
  // @ApiPropertyOptional({ description: 'Example optional string property' })
  @IsString()
  @IsOptional()
  public readonly name?: string;
  
  // Add other strictly validated properties below
}