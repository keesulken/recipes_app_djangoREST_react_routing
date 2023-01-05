from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions

from .serializers import *
from .models import *


class UserViewSet(viewsets.ModelViewSet):
    queryset =User.objects.all()
    serializer_class = UserSerializer


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
