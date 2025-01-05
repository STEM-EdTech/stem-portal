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
- Authentication: Supabase Auth

Backend:
- Database: Supabase
- Backend: Server-side rendering with NextJS
- ORM: Drizzle
- API: tRPC

### Getting Started

To get started, clone the repository and set up the environment variables.

#### Setting Up Environment Variables

To configure the environment variables, copy the `.env.example` file to `.env`:

```bash
cp .env.example .env.local
```

Some mandatory environment variables related to authentication are need to be set in the `.env.local`. You can get these values from the Supabase dashboard or from a friendly developer.

#### Running the Project

```bash
pnpm install
pnpm dev
```

### Authentication Flow

There are two types of pages: public and private. Public pages are accessible to everyone, while private pages require authentication.

When a request comes in, NextJS will follow the following flow:
1. Check what type of page it is based on the path. If it's one of the allowed public pages, the authentication flow is skipped. This is controlled in middleware.ts.
1. If the page is private, or it's one of the auth-related pages, the authentication middleware kicks in.
1. The authentication middleware will first try to grab a supabase cookie from the request and send it to supabase. Then, based on that cookie it will try to retrieve an existing user from the database. If the cookie is not there or retrieved user record is not valid, it will redirect to the login page.
1. On the Login page the user will provide their email and password. If the credentials are correct, the user will be redirected to the home page. If the credentials are incorrect, the user will be redirected to the login page with an error message.

#### User Registration

When a user registers, they will receive an email with a verification link. When they click on the link, they will be redirected to the home page.

1. When the user lands on the registration page, they will be asked to provid their email and choose a password.
1. When the user submits the form, the email and password will be sent to Supabase for registration, together with the redirect link to return to if the registration is successful.
1. Supabase will send an email to the user with a verification link.
1. The link will point to the `/auth/confirm` route handler, which will verify the user and redirect them to the home page.

### Contributing

The project uses the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages. Please follow this convention when making changes.