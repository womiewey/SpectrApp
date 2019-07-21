from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from spectra.serializers import RecipesSerializer
from spectra.models import Recipes
# Create your views here.

@csrf_exempt
@api_view(['GET','POST'])
def recipe_list(request):
    if request.method == 'GET':
        recipes = Recipes.objects.all()
        serializer = RecipesSerializer(recipes,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = RecipesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(['GET','POST'])
def message_list(request):
    if request.method == 'GET':
        messages = Messages.objects.all()
        serializer = MessagesSerializer(messages,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = MessagesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)