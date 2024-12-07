from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_data, name='create_data'),
    path('admin/', admin.site.urls),
    path('api/', include('myapp.urls')),
    path('products/', ProductListCreateView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]