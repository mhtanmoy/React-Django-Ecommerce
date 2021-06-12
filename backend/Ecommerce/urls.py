from django.urls import path
from Ecommerce.views import product_views as pviews
from Ecommerce.views import user_views as uviews
from Ecommerce.views import order_views as oviews
 

urlpatterns = [
    path('users/login', uviews.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register', uviews.registerUser, name="register"),
    path('users', uviews.getUsers, name="users"),
    path('users/profile', uviews.getUserProfile, name="user-profile"),
    path('users/update', uviews.updateUserProfile, name="user-profile-update"),
    path('products/', pviews.Products, name="products"),
    path('products/<str:pk>', pviews.getProduct),
    path('order/add', oviews.addOrderItems, name='orders-add')
    
]