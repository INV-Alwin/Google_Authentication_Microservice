from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
from google.auth.exceptions import GoogleAuthError
from rest_framework_simplejwt.tokens import RefreshToken
from dotenv import load_dotenv
import os
from .models import User

load_dotenv()  # loads variables from .env


class GoogleAuthService:

    def __init__(self, client_id=None):
        self.client_id = client_id or os.getenv("CLIENT_ID")

    def authenticate(self, token):
        """
        Run Google OAuth2 authentication and return JWT tokens.
        """
        try:
            idinfo = id_token.verify_oauth2_token(
                token,
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

        except (ValueError, GoogleAuthError):
            raise ValueError("Invalid Google token")
