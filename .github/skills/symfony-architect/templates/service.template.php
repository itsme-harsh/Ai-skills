<?php

declare(strict_types=1);

namespace App\Service;

use App\DTO\__EntityName__\Create__EntityName__DTO;
use App\Repository\__EntityName__Repository;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

final readonly class __ServiceName__Service
{
    public function __construct(
        private __EntityName__Repository $repository,
        private LoggerInterface $logger
    ) {}

    public function create(Create__EntityName__DTO $dto): array
    {
        $this->logger->info('Creating new __EntityName__');
        
        // $entity = new __EntityName__($dto->name);
        // $this->repository->save($entity, true);
        // return $this->mapToResponse($entity);
        
        throw new \LogicException('Method not implemented.');
    }

    public function getById(string $id): array
    {
        $this->logger->info(sprintf('Fetching __EntityName__ with ID: %s', $id));
        
        // $entity = $this->repository->find($id);
        // if (!$entity) {
        //     throw new NotFoundHttpException('__EntityName__ not found.');
        // }
        // return $this->mapToResponse($entity);
        
        throw new \LogicException('Method not implemented.');
    }
}