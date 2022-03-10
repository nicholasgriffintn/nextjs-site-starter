This app was created with this template: https://github.com/nicholasgriffintn/nextjs-site-starter

# Next.JS Starter

This is a starter template that I have created to serve as an initial starting point for my side projects that use Next.JS.

It includes Next.JS, Prisma, a GraphQL server, Tailwind CSS styling and it's all typed, of course.

[![Latest PR Status](https://github.com/nicholasgriffintn/nextjs-site-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/nicholasgriffintn/nextjs-site-starter/actions/workflows/ci.yml)

## Get Started

To get started, you first need to copy `.env.example` to `.env`.

In your new .env file, you need to edit the environment variables to match your application, in particular, you need to enter a `DATABASE_URL` according to your database, this should be a connection string.

Once that's done, you should run `yarn install` to retrieve and install the required dependencies.

If it's your first time connecting to the database, you should also run the command `yarn migrate-dev` to initially setup your database.

## Working with the code

Once you've installed and setup everything, you can run the command `yarn dev` to start a local instance of the application.

It should be available at `http://localhost:3000`.

## Building the code

To build the code, run the command `yarn build`. For production, you should also run `yarn gql-gen` to generate the [urql](https://formidable.com/open-source/urql/) hooks for the graphQL queries with [GraphQL Code Generator](https://graphql-code-generator.com/)

## Prisma

To generate the prisma client, you can also run `yarn prisma-client`.

## Applying migrations

For development, run the following command:

`yarn migrate-dev`

For production, run the following command:

`yarn migrate-deploy`
