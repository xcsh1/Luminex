from django.forms import ModelForm
from .models import Delivery, Invoice

class DeliveryForm(ModelForm):
    class Meta:
        model = Delivery
        fields = ('item','unitprice','quantity','address','status')

class InvoiceForm(ModelForm):
    class Meta:
        model = Invoice
        fields = ('item','unitprice','quantity')