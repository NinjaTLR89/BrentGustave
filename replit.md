# Replit Configuration

## Overview

This is a React-based web application built with Vite as the build tool. The project appears to be a template or starter project for building modern React applications with TypeScript support, styled using Tailwind CSS for utility-first styling, and enhanced with Framer Motion for animations and Lucide React for icons.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18**: Modern React with hooks and functional components as the primary UI framework
- **Vite**: Fast build tool chosen over traditional bundlers like Webpack for faster development experience with Hot Module Reloading (HMR)
- **TypeScript Support**: Configured for type safety while maintaining flexibility with JavaScript files
- **ES Modules**: Modern module system using `"type": "module"` in package.json

### Styling and UI
- **Tailwind CSS v4**: Utility-first CSS framework for rapid UI development
- **PostCSS**: CSS processing pipeline with Tailwind and Autoprefixer plugins
- **Framer Motion**: Animation library for creating smooth, performant animations
- **Lucide React**: Icon library for consistent iconography

### Development Environment
- **Development Server**: Vite dev server configured to run on host `0.0.0.0` and port `5000` for Replit compatibility
- **File Structure**: Standard React project structure with `/src` directory for source code
- **Hot Reloading**: Automatic browser refresh during development through Vite

### Build Configuration
- **Target**: ESNext for modern JavaScript features
- **JSX**: React JSX transform for optimal bundle size
- **Module Resolution**: Node-style module resolution
- **Strict TypeScript**: Enabled for better code quality and error catching

## External Dependencies

### Core Framework Dependencies
- **React & React DOM**: Frontend framework and DOM rendering
- **Vite**: Build tool and development server
- **@vitejs/plugin-react**: Vite plugin for React support

### UI and Styling
- **Tailwind CSS**: CSS framework with PostCSS integration
- **@tailwindcss/postcss**: PostCSS plugin for Tailwind
- **Autoprefixer**: CSS vendor prefixing
- **Framer Motion**: Animation library
- **Lucide React**: Icon components

### Development Tools
- **TypeScript**: Type checking and development tooling
- **@types/react & @types/react-dom**: Type definitions for React

### Hosting Platform
- **Replit**: Cloud-based development and hosting environment with specific server configuration for deployment