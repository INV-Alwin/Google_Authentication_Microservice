import grpc
from proto_generated import auth_pb2, auth_pb2_grpc

class AuthGRPCClient:
    def __init__(self):
        self.channel = grpc.insecure_channel("localhost:50051")
        self.stub = auth_pb2_grpc.AuthServiceStub(self.channel)

    def start_google_auth(self, token: str):
        request = auth_pb2.AuthRequest(token=token)
        response = self.stub.StartGoogleAuth(request)
        return {
            "access": response.access_token,
            "refresh": response.refresh_token,
            "email": response.email,
            "name": response.name
        }
