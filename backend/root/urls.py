from django.urls import path
from .views import ListingAPI

# general apis
listing_and_creating_api = ListingAPI.as_view({
    'get': 'list',
    'post': 'create'
})

# item specific apis
detailing_and_updating_apis = ListingAPI.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = [
    path("list/", listing_and_creating_api, name="list"),
    path("list/<int:pk>/", detailing_and_updating_apis, name="detail")
]

