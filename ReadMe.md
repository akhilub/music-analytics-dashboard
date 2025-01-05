# Streamify - Music Analytics Dashboard

A modern analytics dashboard for the Streamify music streaming service, built with Next.js 15 and React 19.

## Features

- 📊 Comprehensive Analytics Dashboard
  - Key Metrics Display (Total Users, Active Users, Growth Rates)
  - Revenue Distribution Charts
  - User Growth Visualization
  - Interactive Data Tables
  
- 🎨 Modern Design
  - Responsive Layout
  - Dark/Light Mode Support
  - Clean UI Components with shadcn/ui
  
- 🚀 Performance Optimized
  - Server-Side Rendering
  - Partial Pre-rendering
  - Interactive Charts and Tables

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui Components
- AG Grid for Tables
- Bun Package Manager

## Getting Started

### Prerequisites

- Bun (Package Manager)
- Node.js

### Installation & Launch

```bash
brew install bun

bun i

bun dev

bun run build
```

### Project Structure

| _directory (/src) | Purpose        |
| ------------ | -------------- |
| app          | Next.js Routes    |
| components   | Reusable UI Components |
| lib          | Utilities & Helpers    |
| hooks        | Custom React Hooks |

### Core Features

## Navigation
 - Library management (Trending, Pending, Approved)
 - Artist tracking (Top Artists, Payments, Banned)
 - User analytics (Charts, Subscriptions, Quota, Streams)
 - Settings configuration

## Testing
- Framework: Vitest
- React Testing Library
- WIP in test branch

### Requiremnts docs and System WireFrame Design

<img width="1378" alt="Requirements Image" src="./public/AppDesign.png">

### Performance Report

![Lighthouse Image](./public/lighthouse-report.png)
