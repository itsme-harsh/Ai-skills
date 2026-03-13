<?php

declare(strict_types=1);

namespace App\Tests\Service;

use App\DTO\__EntityName__\Create__EntityName__DTO;
use App\Repository\__EntityName__Repository;
use App\Service\__ServiceName__Service;
use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\MockObject\MockObject;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

final class __ServiceName__ServiceTest extends TestCase
{
    private __EntityName__Repository&MockObject $repository;
    private LoggerInterface&MockObject $logger;
    private __ServiceName__Service $service;

    protected function setUp(): void
    {
        $this->repository = $this->createMock(__EntityName__Repository::class);
        $this->logger = $this->createMock(LoggerInterface::class);

        $this->service = new __ServiceName__Service(
            $this->repository,
            $this->logger
        );
    }

    public function testGetByIdThrowsNotFoundException(): void
    {
        $this->repository->expects($this->once())
            ->method('find')
            ->with('invalid-id')
            ->willReturn(null);

        $this->expectException(NotFoundHttpException::class);

        $this->service->getById('invalid-id');
    }
}