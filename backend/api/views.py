from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, ReceipeSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Receipe
# Create your views here.

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ReceipeListCreate(generics.ListCreateAPIView):
    serializer_class = ReceipeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Receipe.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)

class ReceipeDelete(generics.DestroyAPIView):
    serializer_class = ReceipeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Receipe.objects.filter(author=user)
