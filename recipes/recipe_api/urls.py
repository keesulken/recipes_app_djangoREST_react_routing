from django.urls import path, include
from rest_framework import routers
from .views import *


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'recipes', RecipeViewSet)
router.register(r'ingredients', IngredientViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]