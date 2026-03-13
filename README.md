# 🚀 Team AI Agent Skills (Enterprise Standards)

This repository contains high-fidelity **GitHub Copilot Agent Skills**. These configurations act as a "Principal Architect-in-a-Box," forcing GitHub Copilot to generate code that adheres to our 10+ years of engineering experience, SOLID principles, and strict architectural guardrails.

## 🌟 The Competitive Advantage

| Feature | Junior/Standard AI Output | Our Agent Skill Output |
| :--- | :--- | :--- |
| **Architecture** | Monolithic / Spaghetti | Clean, Modular, Layered |
| **Type-Safety** | Uses `any` or missing types | Absolute Type-Safety (PHP 8.2+ / TS Strict) |
| **Logic Placement** | Business logic in Controllers | Logic strictly in Stateless Services |
| **Deadlines** | Hours spent refactoring AI code | Minutes to "Merge-Ready" features |
| **Testing** | No tests or untestable code | Auto-generated Jest/PHPUnit boilerplate |

---

## 🛠️ Available Expert Personas

| Skill Folder | Tech Stack | Primary Focus |
| :--- | :--- | :--- |
| **`nodejs-architect`** | Node.js + NestJS | SOLID, Repository Pattern, DTO Validation |
| **`symfony-architect`** | PHP 8.2+ + Symfony | Attributes, #[MapRequestPayload], Type-Safety |

---

## 📥 Installation

To activate these skills in your project, place them in the directory where Copilot looks for "Agent Context."

### Option 1: Manual (Easiest)
1. Clone this repository or download the folder for the skill you need (e.g., `nodejs-architect`).
2. Paste the folder into your project at: `.github/skills/`

### Option 2: The DevOps One-Liner (Fastest)
Run the relevant command from your **project root** to instantly sync the skill.

#### 🟢 Node.js / NestJS Architect
```bash
mkdir -p .github/skills/nodejs-architect && curl -sL https://raw.githubusercontent.com/itsme-harsh/Ai-skills/main/nodejs-architect/SKILL.md -o .github/skills/nodejs-architect/SKILL.md
```

#### 🟢 Symfony / PHP Architect Architect
```bash
mkdir -p .github/skills/symfony-architect && curl -sL https://raw.githubusercontent.com/itsme-harsh/Ai-skills/main/symfony-architect/SKILL.md -o .github/skills/symfony-architect/SKILL.md
```