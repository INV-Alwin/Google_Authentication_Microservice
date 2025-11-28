# Google Authentication Microservice

A microservice architecture implementation for Google OAuth authentication with separate Frontend, BFF (Backend for Frontend), and Authentication Service components.

## Architecture

- **Frontend**: Next.js React application handling Google OAuth flow
- **BFF**: Django REST API acting as intermediary between frontend and services
- **Service**: Django gRPC service handling authentication logic and user management

## Authentication Flow

1. Frontend initiates Google OAuth and receives authorization code
2. Frontend sends code to BFF via REST API
3. BFF forwards code to Service via gRPC
4. Service exchanges code for ID token with Google, verifies it, and creates/updates user
5. Service generates JWT tokens and returns them via gRPC
6. BFF returns JWT tokens to Frontend via REST API

## Setup Instructions

### Prerequisites

- Python 3.8+
- Node.js 18+
- Google OAuth credentials (Client ID and Client Secret)

### 1. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs (for development: `http://localhost:3000`)
6. Note down Client ID and Client Secret

### 2. Environment Variables

#### Service (.env)
```bash
cp Service/.env.example Service/.env
# Edit Service/.env with your values:
SECRET_KEY=your-django-secret-key
CLIENT_ID=your-google-client-id.apps.googleusercontent.com
CLIENT_SECRET=your-google-client-secret
REDIRECT_URI=http://localhost:3000
```

#### BFF (.env)
```bash
cp BFF/.env.example BFF/.env
# Edit BFF/.env:
SECRET_KEY=your-django-secret-key
```

#### Frontend (.env.local)
```bash
cp Frontend/frontend/.env.example Frontend/frontend/.env.local
# Edit Frontend/frontend/.env.local:
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
NEXT_PUBLIC_BFF_URL=http://localhost:8000
```

### 3. Install Dependencies

#### Backend Services
```bash
pip install -r requirements.txt
```

#### Frontend
```bash
cd Frontend/frontend
npm install
```

### 4. Database Setup

#### Service Database
```bash
cd Service
python manage.py migrate
```

#### BFF Database
```bash
cd BFF
python manage.py migrate
```

### 5. Run Services

#### Terminal 1: Authentication Service
```bash
cd Service
python grpc_server.py
```

#### Terminal 2: BFF
```bash
cd BFF
python manage.py runserver 8000
```

#### Terminal 3: Frontend
```bash
cd Frontend/frontend
npm run dev
```

### 6. Test Authentication

1. Open http://localhost:3000
2. Click "Continue with Google"
3. Complete Google OAuth flow
4. You should be redirected to `/auth-success` with your JWT token

## CORS Configuration

The BFF is configured with CORS to allow requests from the frontend:
- `django-cors-headers` is installed and configured
- Allows requests from `http://localhost:3000`
- Supports POST requests with proper headers
- Credentials are allowed for cookie-based authentication (if needed)

## Axios Configuration

The frontend uses axios with:
- Proper error handling for different HTTP status codes
- Timeout configuration (10 seconds)
- Content-Type headers set to `application/json`
- Toast notifications for user feedback

## API Endpoints

### BFF
- `POST /google/callback/` - Accepts authorization code, returns JWT tokens

### Frontend
- `/` - Login page
- `/auth-success` - Success page with JWT token display

## Security Notes

- Client secret is kept server-side in the Service component
- ID token verification happens on the server
- JWT tokens are generated server-side
- No sensitive credentials exposed to frontend

## Development

The authentication flow has been modified to keep token exchange server-side for better security. The frontend only handles the OAuth authorization code flow and delegates token exchange to the backend services.
