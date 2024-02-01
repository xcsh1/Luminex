from django.shortcuts import render, redirect
from django.db.models import Sum, F
from .models import Delivery, Invoice, Inventory, Tracking
from .forms import DeliveryForm, InvoiceForm



def index(request):
    return render(request, 'pages/home.html')

def delivery_page(request):
    Delivery.objects.all().update(total=F('unitprice') * F('quantity'))
    Deliverys = Delivery.objects.all()
    totalprice = Delivery.objects.all().aggregate(Sum('total'))['total__sum'] or 0.00
    form = DeliveryForm()
    if request.method == 'POST':
        form = DeliveryForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('Delivery')
    return render(request, 'pages/delivery.html',{'Deliverys': Deliverys, 'form': form, 'totalprice': totalprice})



def deliveryUpdate(request, id):
    Invoice.objects.all().update(total=F('unitprice') * F('quantity'))
    delivery = Delivery.objects.get(id=id)
    form = DeliveryForm(initial={'Item': delivery.item, 'Quantity': delivery.quantity, 'Unit Price': delivery.unitprice, 'Address': delivery.address, 'Status': delivery.status})
    if request.method == "POST":
        form = DeliveryForm(request.POST, instance=delivery)
        if form.is_valid():
            try:
                form.save()
                model = form.instance
                return redirect('Delivery')
            except Exception as e:
                pass
    return render(request,'pages/Delivery_update.html',{'form': form})

def deliveryDelete(request, id):
    delivery = Delivery.objects.get(id=id)
    try:
        delivery.delete()
    except:
        pass
    return redirect('Delivery')
def Inventory_page(request):
    Inventory = Invoice.objects.all()
    return render(request, 'pages/Inventory.html',{'Inventory': Inventory})

def Invoice_page(request):
    Invoice.objects.all().update(total=F('unitprice') * F('quantity'))
    Invoices = Invoice.objects.all()
    totalprice = Invoice.objects.all().aggregate(Sum('total'))['total__sum'] or 0.00
    totalovr = round(totalprice, 0)
    form = InvoiceForm()
    if request.method == 'POST':
        form = InvoiceForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('Invoice')

    return render(request, 'pages/Invoice.html',{'Invoices': Invoices, 'form': form, 'totalovr':totalovr})

def invoiceUpdate(request, id):
    Invoice.objects.all().update(total=F('unitprice') * F('quantity'))
    invoice = Invoice.objects.get(id=id)
    form = InvoiceForm(initial={'Item': invoice.item, 'Quantity': invoice.quantity, 'Unit Price': invoice.unitprice})
    if request.method == "POST":
        form = InvoiceForm(request.POST, instance=invoice)
        if form.is_valid():
            try:
                form.save()
                model = form.instance
                return redirect('Invoice')
            except Exception as e:
                pass
    return render(request,'pages/Invoice_update.html',{'form': form})

def invoiceDelete(request, id):
    invoice = Invoice.objects.get(id=id)
    try:
        invoice.delete()
    except:
        pass
    return redirect('Invoice')

def Order_page(request):
    Order = Delivery.objects.all()
    return render(request, 'pages/Order.html',{'Order': Order})

def About_page(request):
    return render(request, 'pages/about.html')
