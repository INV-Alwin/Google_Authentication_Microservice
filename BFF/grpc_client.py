import grpc
import os
import sys

# Add the BFF directory to Python path for proto imports
sys.path.insert(0, os.path.dirname(__file__))

from proto_generated import auth_pb2, auth_pb2_grpc

class AuthGRPCClient:
    def __init__(self):
        self.channel = grpc.insecure_channel("localhost:50051")
        self.stub = auth_pb2_grpc.AuthServiceStub(self.channel)

    def start_google_auth(self, code: str):
        request = auth_pb2.GoogleAuthRequest(code=code)
        response = self.stub.StartGoogleAuth(request)
        return {
            "access": response.access_token,
            "refresh": response.refresh_token,
            "email": response.email,
            "name": response.name
        }
