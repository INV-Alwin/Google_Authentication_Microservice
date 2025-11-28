from rest_framework.views import APIView
from rest_framework.response import Response
from grpc_client import AuthGRPCClient

class GoogleAuthCallback(APIView):
    def post(self, request):
        code = request.data.get("code")

        if not code:
            return Response({"error": "code missing"}, status=400)

        grpc_client = AuthGRPCClient()
        grpc_response = grpc_client.start_google_auth(code)

        return Response(grpc_response)
