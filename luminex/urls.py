from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, ),
    path('home/', views.index, ),
    path('delivery/', views.delivery_page, name='Delivery'),
    path('Inventory/', views.Inventory_page, ),
    path('Invoice/', views.Invoice_page, name='Invoice'),
    path('Order/', views.Order_page, ),
    path('about/', views.About_page, ),
    path('delivery-delete/<int:id>', views.deliveryDelete, name='delivery-delete'),
    path('delivery-update/<int:id>', views.deliveryUpdate, name='delivery-update'),
    path('invoice-delete/<int:id>', views.invoiceDelete, name='invoice-delete'),
    path('invoice-update/<int:id>', views.invoiceUpdate, name='invoice-update')
]
