from spectra.models import Dish, Ingredients
from rest_framework import serializers

class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = ('id','dish')

class IngredientsSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Ingredients
        fields = ('id','dish','ingredient','price','alternative')