# Balarambati Appointments Hub

A modern web application for managing doctor appointments, built with React, TypeScript, and Vite.

## Features

- **User Authentication**: Secure login and registration for patients and administrators
- **Appointment Booking**: Easy scheduling with real-time availability
- **Doctor Profiles**: Detailed information about healthcare providers
- **Admin Dashboard**: Manage appointments, doctors, and schedules
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Built with Radix UI and Tailwind CSS

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI
- **State Management**: React Query, Zustand
- **Routing**: React Router
- **Form Handling**: React Hook Form with Zod validation
- **Testing**: Vitest, React Testing Library
- **Linting & Formatting**: ESLint, Prettier
- **Git Hooks**: Husky, lint-staged

## Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/balarambati-appointments-hub.git
   cd balarambati-appointments-hub
   ```

2. **Install dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn
   ```

   Or using pnpm:
   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Copy the example environment file and update the values:
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration.

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run lint` - Lint the codebase
- `npm run lint:fix` - Fix linting issues
- `npm run type-check` - Check TypeScript types
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── components/       # Reusable UI components
├── contexts/         # React context providers
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and configs
├── pages/            # Page components
├── store/            # State management
├── test/             # Test utilities and setup
├── types/            # TypeScript type definitions
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## Testing

This project uses Vitest and React Testing Library for testing. To run tests:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate test coverage report
npm run test:coverage
```

## Linting & Formatting

This project uses ESLint and Prettier for code quality. The following commands are available:

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

Git hooks are set up with Husky to automatically run linters and formatters before commits.

## Code Style

- Use TypeScript for all new code
- Follow the Airbnb JavaScript/TypeScript style guide
- Use functional components with hooks
- Prefer named exports over default exports
- Write meaningful commit messages following Conventional Commits

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tooling
- [React](https://reactjs.org/) for the UI library
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [Vitest](https://vitest.dev/) for testing
