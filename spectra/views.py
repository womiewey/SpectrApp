from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from spectra.serializers import DishSerializer, IngredientsSerializer
from spectra.models import Dish, Ingredients
# Create your views here.

@csrf_exempt
@api_view(['GET','POST'])
def dish_list(request):
    if request.method == 'GET':
        dishes = Dish.objects.all()
        serializer = DishSerializer(dishes,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DishSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(['GET','POST'])
def ingredient_list(request):
    if request.method == 'GET':
        ingredient = Ingredients.objects.all()
        serializer = IngredientsSerializer(ingredient,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = IngredientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)