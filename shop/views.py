from django.shortcuts import render
from shop.models import User, Product, Recipe

def create_data(request):
    # Create a new user
    user = User.objects.create(username='JohnDoe', email='john@example.com', password='password123')

    # Add a new product
    product = Product.objects.create(name='Milk', category='Dairy', price=15.00, stock=100)

    # Create a new recipe
    recipe = Recipe.objects.create(title='Eggs with Pastrami', instructions='Beat eggs and cook with pastrami.', user=user)

    return render(request, 'success.html')  # Render a success page or redirect



from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer

class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
