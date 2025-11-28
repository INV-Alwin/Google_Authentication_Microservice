from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
from google.auth.exceptions import GoogleAuthError
from rest_framework_simplejwt.tokens import RefreshToken
from dotenv import load_dotenv
import os
import requests
from .models import User

load_dotenv()  # loads variables from .env


class GoogleAuthService:

    def __init__(self, client_id=None, client_secret=None, redirect_uri=None):
        self.client_id = client_id or os.getenv("CLIENT_ID")
        self.client_secret = client_secret or os.getenv("CLIENT_SECRET")
        self.redirect_uri = redirect_uri or os.getenv("REDIRECT_URI")

    def authenticate(self, code):
        """
        Exchange Google OAuth code for ID token, verify it, and return JWT tokens.
        """
        try:
            # Exchange authorization code for access token and ID token
            token_response = requests.post(
                "https://oauth2.googleapis.com/token",
                data={
                    "code": code,
                    "client_id": self.client_id,
                    "client_secret": self.client_secret,
                    "redirect_uri": self.redirect_uri,
                    "grant_type": "authorization_code",
                }
            )
            token_data = token_response.json()

            if "id_token" not in token_data:
                raise ValueError("No ID token in response")

            id_token_value = token_data["id_token"]

            # Verify the ID token
            idinfo = id_token.verify_oauth2_token(
                id_token_value,
                google_requests.Request(),
                self.client_id
            )

            email = idinfo.get("email")
            name = idinfo.get("name", "")

            user, created = User.objects.get_or_create(
                email=email,
                defaults={"name": name}  # set name only if user is created
            )

            # generate JWT tokens
            refresh = RefreshToken.for_user(user)
            access = str(refresh.access_token)

            return {
                "access": access,
                "refresh": str(refresh),
                "email": email,
                "name": name
            }

        except (ValueError, GoogleAuthError, requests.RequestException) as e:
            raise ValueError(f"Authentication failed: {str(e)}")
