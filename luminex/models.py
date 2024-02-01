from django.db import models
from django.db.models import Sum, F
# Create your models here.\
D_STATUS = (
    ('On Delivery','On Delivery'),
    ('Delivered', 'Delivered'),
)

class Delivery(models.Model):
    item = models.CharField(db_column='Item', max_length=70, null=True)
    quantity = models.IntegerField(db_column='Quantity', null=True)
    unitprice = models.DecimalField(db_column='Unit Price',null=True, decimal_places=2, max_digits=9)
    address = models.CharField(db_column='Address', max_length=1024, null=True)
    status = models.CharField(db_column='Status',max_length=70,choices=D_STATUS, default='On Delivery')
    total = models.DecimalField(null=True, max_digits=10, decimal_places=2)

class Invoice(models.Model):
    item = models.CharField(db_column='Item',max_length=70, null=True)
    quantity = models.IntegerField(db_column='Quantity',null=True)
    unitprice = models.DecimalField(db_column='Unit Price',null=True, max_digits=10, decimal_places=2)
    total = models.DecimalField(null=True, max_digits=10, decimal_places=2)

class Inventory(models.Model):
    item = models.CharField(db_column='Item',max_length=70, null=True)
    quantity = models.IntegerField(db_column='Quantity',null=True)
    unitprice = models.DecimalField(db_column='Unit Price',null=True, max_digits=10, decimal_places=2)
    total = models.DecimalField(null=True, max_digits=10, decimal_places=2)

class Login(models.Model):
    username = models.CharField(max_length=50, null=True)
    password = models.CharField(max_length=70, null=True)
    email = models.EmailField

class Tracking(models.Model):
    location = models.TextField(db_column='Location',blank=True)
    status = models.CharField(db_column='Status',max_length=50, null=True)
    item = models.CharField(db_column='Item',max_length=50, null=True)
