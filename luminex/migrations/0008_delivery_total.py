# Generated by Django 4.2.6 on 2024-01-25 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('luminex', '0007_delivery_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='delivery',
            name='total',
            field=models.DecimalField(decimal_places=2, max_digits=10, null=True),
        ),
    ]
