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



from rest_framework import generics, status
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    # Override GET method to fetch products and include a custom response
    def get(self, request, *args, **kwargs):
        products = Product.objects.all()
        serializer = self.get_serializer(products, many=True)
        
        # Add custom data if needed (e.g., username or custom info)
        output = {
            "username": "SeifAhmed",  # Replace with your logic to fetch username or other info
            "products": serializer.data
        }
        return Response(output)

    # Override POST method to create a new product and return custom data
    def post(self, request, *args, **kwargs):
        # Optionally, you can customize the request data before saving the product
        custom_data = request.data.copy()
        custom_data['created_by'] = "SeifAhmed"  # Example custom data (you can replace this with dynamic data)

        serializer = self.get_serializer(data=custom_data)
        if serializer.is_valid():
            serializer.save()  # Save the new product to the database
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductListCreateView(generics.ListCreateAPIView):
    """
    get:
    Return a list of all products.

    post:
    Create a new product.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
from rest_framework import generics
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .models import Product
from .serializers import ProductSerializer

class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter(
                'category', openapi.IN_QUERY, 
                description="Filter products by category", 
                type=openapi.TYPE_STRING
            )
        ]
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)
