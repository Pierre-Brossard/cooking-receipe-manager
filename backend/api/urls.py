from django.urls import path
from . import views

urlpatterns = [
    path('receipes/', views.ReceipeListCreate.as_view(), name='receipe-list'),
    path('receipes/delete/<int:pk>/', views.ReceipeDelete.as_view(), name='delete-receipe')
]
