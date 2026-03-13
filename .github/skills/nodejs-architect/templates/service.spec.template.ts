import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { __ServiceName__Service } from './__entity-name__.service';
import { __EntityName__Repository } from './__entity-name__.repository';

describe('__ServiceName__Service', () => {
  let service: __ServiceName__Service;
  let repository: jest.Mocked<__EntityName__Repository>;

  beforeEach(async () => {
    // Create a mock repository to inject
    const mockRepository = {
      findById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        __ServiceName__Service,
        {
          provide: __EntityName__Repository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<__ServiceName__Service>(__ServiceName__Service);
    repository = module.get(__EntityName__Repository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('should return an entity if found in the repository', async () => {
      const mockEntity = { id: '123', name: 'Test Entity' };
      repository.findById.mockResolvedValue(mockEntity);

      const result = await service.findOne('123');
      expect(result).toEqual(mockEntity);
      expect(repository.findById).toHaveBeenCalledWith('123');
    });

    it('should throw a NotFoundException if the entity does not exist', async () => {
      repository.findById.mockResolvedValue(null);

      await expect(service.findOne('123')).rejects.toThrow(NotFoundException);
    });
  });
});