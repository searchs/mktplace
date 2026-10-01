# Marketplace — Historical Node/Mongo Experiment

> **Status:** Archived / historical engineering project. This repository is retained for provenance and learning value; it is not an actively maintained commercial product.

This repository contains an earlier marketplace experiment built around Node.js/Express and MongoDB, with separate application/admin areas. The checked-in application metadata identifies the project as a marketplace prototype and uses an older Node/Mongoose/AWS SDK stack.

## What it contains

- `app/` — Node.js/Express marketplace API/application code
- `admin/` — administration-side code
- MongoDB/Mongoose persistence experiments
- AWS SDK / S3 upload integration experiments
- historical Gradle-generated artefacts from the original development environment

The application package is historically named `genx`; that package identity is preserved rather than being rewritten in an archived repository.

## Maintenance status

No feature development or dependency modernisation is planned here. Current dependencies include older major versions such as Mongoose 5 and AWS SDK v2, so this repository should not be treated as a current production baseline.

If a marketplace, upload or persistence pattern is useful for a current product, migrate the specific idea into an actively maintained repository and implement it against current security and dependency standards.

## Configuration

The application expects database configuration through environment variables rather than committed credentials. Before running any historical code, review all environment, storage, authentication and deployment assumptions.

## Archive policy

This repository is intentionally preserved as part of the engineering history. Archiving it on GitHub does not imply that its code reflects current architecture, security, testing or dependency standards.
