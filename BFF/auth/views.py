from rest_framework.views import APIView
from rest_framework.response import Response
from grpc_client import AuthGRPCClient

class GoogleAuthCallback(APIView):
    def post(self, request):
        token = request.data.get("token")

        if not token:
            return Response({"error": "token missing"}, status=400)

        grpc_client = AuthGRPCClient()
        grpc_response = grpc_client.start_google_auth(token)

        return Response(grpc_response)
