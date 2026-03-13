<?php

declare(strict_types=1);

namespace App\DTO\__EntityName__;

use Symfony\Component\Validator\Constraints as Assert;

final readonly class Create__EntityName__DTO
{
    public function __construct(
        #[Assert\NotBlank]
        #[Assert\Length(min: 3, max: 255)]
        public string $name,

        #[Assert\Email]
        #[Assert\NotBlank]
        public string $email,
        
        #[Assert\Optional]
        public ?string $description = null,
    ) {}
}