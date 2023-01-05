from .models import *
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username',]


class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 
                'author', 
                'title', 
                'ingredients', 
                'content', 
                'category',
                'time_create',]


class IngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['id', 'name',]


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name',]