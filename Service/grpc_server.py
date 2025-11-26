import os
import django
from django.conf import settings

# Configure Django settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

import grpc
from concurrent import futures
from proto_generated import auth_pb2, auth_pb2_grpc
from googleAuth.views import GoogleAuthService



class AuthServiceHandler(auth_pb2_grpc.AuthServiceServicer):

    def __init__(self):
        self.google_auth = GoogleAuthService()  # instantiate once

    def StartGoogleAuth(self, request, context):
        token = request.token
        try:
            result = self.google_auth.authenticate(token)
            return auth_pb2.AuthResponse(
                access_token=result["access"],
                refresh_token=result["refresh"],
                email=result["email"],
                name=result["name"]
            )
        except ValueError as e:
            context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
            context.set_details(str(e))
            return auth_pb2.AuthResponse()  # empty response on error

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    auth_pb2_grpc.add_AuthServiceServicer_to_server(AuthServiceHandler(), server)
    server.add_insecure_port("[::]:50051")
    server.start()
    print("Auth gRPC server running on port 50051…")
    server.wait_for_termination()

if __name__ == "__main__":
    serve()