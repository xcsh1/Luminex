# Generated by Django 4.2.6 on 2024-01-25 08:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('luminex', '0002_alter_delivery_item_alter_delivery_quantity_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='delivery',
            name='status',
            field=models.CharField(choices=[('ondelivery', 'On Delivery'), ('delivered', 'Delivered')], db_column='Status', default='ondelivery', max_length=70),
        ),
    ]
