from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from Ecommerce.Serializers import *
from Ecommerce.models import *
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status


@api_view(['GET'])
def Products(request):
    products=Product.objects.all()
    serializer=ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    product=Product.objects.get(_id=pk)
    serializer=ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    user = request.user
    product=Product.objects.create(
        user = user,
        name = 'Sample Name',
        price = 0,
        brand = 'sample Brand',
        countInstock = 0,
        category = 'sample Category',
        description = 'Adwada'
    )
    serializer=ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
    product=Product.objects.get(_id=pk)
    product.delete()
    return Response('Product deleted')

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
    data = request.data
    product=Product.objects.get(_id=pk)
    product.name = data['name']
    product.price = data['price']
    product.brand = data['brand']
    product.countInstock = data['countInstock']
    product.category = data['category']
    product.description = data['description']
    product.save()
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)
