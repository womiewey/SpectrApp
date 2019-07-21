from django.conf.urls import url
from spectra import views

urlpatterns = [
    url(r'^dish/$',views.dish_list),
    url(r'^ingredients/$',views.ingredient_list)
]