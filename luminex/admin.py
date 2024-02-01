from django.contrib import admin
from .models import Invoice,Inventory,Delivery,Tracking,Login

# Register your models here.
admin.site.register(Invoice)
admin.site.register(Inventory)
admin.site.register(Delivery)
admin.site.register(Tracking)
admin.site.register(Login)