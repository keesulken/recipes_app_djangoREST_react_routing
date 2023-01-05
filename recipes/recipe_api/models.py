from django.db import models
from django.contrib.auth.models import User


CTG_TYPES = [
    ('first', 'Первое'),
    ('secnd', "Второе"),
    ('salad', "Салат"),
    ('sweet', "Десерт"),
    ('drink', "Напиток"),
]


class Recipe(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    ingredients = models.ManyToManyField('Ingredient', 
        through='RecipeIngredient')
    content = models.TextField()
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    time_create = models.DateTimeField(auto_now_add=True)


class Ingredient(models.Model):
    name = models.CharField(max_length=64)


class Category(models.Model):
    name = models.CharField(max_length=5, 
        choices=CTG_TYPES, 
        default='secnd')


class RecipeIngredient(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)