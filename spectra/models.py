from django.db import models

# Create your models here.
class Dish(models.Model):
    dish = models.CharField(max_length=50)

    def __str__(self):
        return self.dish
    class Meta:
        verbose_name_plural = 'Dishes' 

class Ingredients(models.Model):
    ingredient = models.CharField(max_length=100)
    price = models.IntegerField()
    alternative = models.CharField(max_length=10)
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE)
    
    
    # def __str__(self):
    #     return self.dish
    class Meta:
        verbose_name_plural = "Ingredients"