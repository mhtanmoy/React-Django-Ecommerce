from django.urls import path
from . import views
 

urlpatterns = [
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.home, name="home"),
    path('users/profile', views.getUserProfile, name="user-profile"),
    path('products/', views.Products, name="products"),
    path('products/<str:pk>', views.getProduct),
]