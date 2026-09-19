# Notes API

A RESTful backend API built with **TypeScript, Node.js, Express, MongoDB, and JWT authentication** for securely managing user notes.

The project demonstrates backend fundamentals including authentication, database integration, protected routes, CRUD operations, environment-based configuration, and error handling.

## Features

* User registration and login
* JWT-based authentication
* Password hashing with bcrypt
* Protected note routes
* Create, read, update, and delete notes
* User-specific note access
* MongoDB persistence with Mongoose
* TypeScript for type safety
* Centralized error handling
* Environment variables for configuration

## Tech Stack

| Technology   | Purpose                                 |
| ------------ | --------------------------------------- |
| TypeScript   | Application development and type safety |
| Node.js      | Runtime environment                     |
| Express      | REST API framework                      |
| MongoDB      | Database                                |
| Mongoose     | MongoDB ODM                             |
| JWT          | Authentication                          |
| bcryptjs     | Password hashing                        |
| dotenv       | Environment configuration               |
| Git & GitHub | Version control                         |

## API Overview

### Authentication

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| `POST` | `/auth/register` | Register a new user           |
| `POST` | `/auth/login`    | Authenticate an existing user |

### Notes

All note endpoints require a valid JWT token.

| Method   | Endpoint     | Description                        |
| -------- | ------------ | ---------------------------------- |
| `GET`    | `/notes`     | Get the authenticated user's notes |
| `POST`   | `/notes`     | Create a new note                  |
| `PUT`    | `/notes/:id` | Update an existing note            |
| `DELETE` | `/notes/:id` | Delete a note                      |

Authentication is provided through the request header:

```text
Authorization: Bearer <JWT_TOKEN>
```

## Project Structure

```text
notes-api/
├── src/
│   ├── config/
│   │   └── db.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   └── notesController.ts
│   ├── middleware/
│   │   ├── authMiddleware.ts
│   │   └── errorMiddleware.ts
│   ├── models/
│   │   ├── Note.ts
│   │   └── User.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   └── noteRoutes.ts
│   ├── types/
│   │   └── express/
│   │       └── index.d.ts
│   └── index.ts
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/CrapeBell/notes-api.git
cd notes-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Never commit the `.env` file to GitHub.

### 4. Start the development server

```bash
npm run dev
```

The API will run on:

```text
http://localhost:5000
```

### 5. Build the project

```bash
npm run build
```

### 6. Run the compiled application

```bash
npm start
```

## Example Request Flow

### Register

```http
POST /auth/register
Content-Type: application/json
```

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "TestPassword123"
}
```

The API returns a JWT token that can be used for authenticated requests.

### Create a Note

```http
POST /notes
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

```json
{
  "title": "My First Note",
  "content": "Testing my Notes API"
}
```

## Authentication Flow

```text
Client
  │
  ├── Register / Login
  │
  ▼
Express API
  │
  ├── Validate credentials
  ├── Hash / verify password
  └── Generate JWT
          │
          ▼
       Client
          │
          │ Authorization: Bearer <token>
          ▼
    Protected Note Routes
          │
          ▼
       MongoDB
```

## What This Project Demonstrates

* Designing RESTful API endpoints
* Implementing authentication and authorization
* Working with MongoDB and Mongoose
* Structuring an Express application using controllers, routes, middleware, and models
* Handling asynchronous database operations
* Protecting user-specific resources
* Managing configuration through environment variables
* Building a TypeScript backend application
* Using Git and GitHub for version control

## Validation

The API has been tested through the complete note-management flow:

* User registration
* User login
* JWT authentication
* Note creation
* Retrieving notes
* Updating notes
* Deleting notes
* Confirming deleted notes are no longer returned

## Security

Sensitive configuration is stored in environment variables and excluded from the repository.

The repository does **not** require the actual MongoDB connection string or JWT secret to be committed.

## Future Improvements

Possible extensions include:

* Request validation
* Pagination and search
* Automated unit and integration tests
* API documentation with Swagger/OpenAPI
* Rate limiting
* Docker support
* CI/CD with GitHub Actions

## Author

**Aarushi Agrawal**

* GitHub: [CrapeBell](https://github.com/CrapeBell)
* LinkedIn: [Aarushi Agrawal](https://linkedin.com/in/aarushi-agrawal-3b2136279)

---

Built as a backend development project to practice **TypeScript, REST APIs, authentication, database integration, and software development fundamentals**.
