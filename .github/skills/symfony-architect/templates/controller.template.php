<?php

declare(strict_types=1);

namespace App\Controller;

use App\DTO\__EntityName__\Create__EntityName__DTO;
use App\Service\__ServiceName__Service;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\MapRequestPayload;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/v1/__entity-route__', name: 'api___entity_route___')]
final class __ServiceName__Controller extends AbstractController
{
    public function __construct(
        private readonly __ServiceName__Service $__serviceInstanceName__
    ) {}

    #[Route('', name: 'create', methods: ['POST'])]
    public function create(
        #[MapRequestPayload] Create__EntityName__DTO $dto
    ): JsonResponse {
        $result = $this->__serviceInstanceName__->create($dto);

        return $this->json($result, Response::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'get', methods: ['GET'])]
    public function get(string $id): JsonResponse
    {
        $result = $this->__serviceInstanceName__->getById($id);

        return $this->json($result, Response::HTTP_OK);
    }
    
    // Additional routes (update, delete) go here
}