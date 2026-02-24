# React Multi-Auth Suite 

A modern React application demonstrating the integration of **Google OAuth** and **Clerk Authentication**. This project features a Microsoft-inspired UI design and handles user sessions, JWT decoding, and protected routing.

##  Features

* **Dual Auth Integration:** Implements both `@react-oauth/google` and `@clerk/clerk-react`.
* **Microsoft-Inspired UI:** A clean, card-based interface with custom SVG branding.
* **JWT Decoding:** Uses `jwt-decode` to extract user metadata (name, email, picture) from Google credentials.
* **Session Persistence:** Google user data is persisted via `localStorage` for a seamless experience.
* **Dynamic Routing:** Managed by `react-router-dom` with a landing page, home dashboard, and registration flow.
* **Clerk Components:** Demonstrates usage of `<SignedIn>`, `<SignedOut>`, and `<UserButton>`.

##  Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React.js** | Frontend Framework |
| **Clerk** | Managed User Authentication & UI Components |
| **Google OAuth** | Third-party Social Login |
| **React Router v6** | Client-side Navigation |
| **JWT-Decode** | Parsing Google Identity Tokens |

##  Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed and access to:
* [Google Cloud Console](https://console.cloud.google.com/) (for Client ID)
* [Clerk Dashboard](https://clerk.com/) (for Publishable Key)

### 2. Environment Setup
Create a `.env` file in the root directory and add your keys:

```env
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here
REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here