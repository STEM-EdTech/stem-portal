# STEM ed.TECH Portal

### Welcome to the STEM ed.TECH Portal!

This is a collection of resources for educators and students interested in STEM education and technology. The portal is a work in progress and will be updated regularly.

### Technology

Frontend:
- Frontend Framework: ReactJS
- Metaframework: NextJS
- Hosting Platform: Vercel
- Localization: next-intl
- Styling: Emotion via Styled Components approach
- Package Manager: pnpm
- Runtime: NodeJS
- Authentication: Auth.js

Backend:
- Database: postgresql
- Backend: TBD
- ORM: Drizzle
- API: tRPC

### Getting Started

To get started, clone the repository and set up the environment variables.

#### Setting Up Environment Variables

To configure the environment variables, copy the `.env.example` file to `.env`:

```bash
cp .env.example .env.local
```

The only environment variable that is mandatory is the `AUTH_SECRET`. This is a random value used by the Auth.js library to encrypt tokens and email verification hashes. You can generate one via the official Auth.js CLI by running:

```bash
npx auth secret
```

#### Running the Project

```bash
pnpm install
pnpm dev
```

### Contributing

The project uses the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages. Please follow this convention when making changes.