# Generated by Django 4.2.6 on 2024-01-25 08:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('luminex', '0003_alter_delivery_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='delivery',
            name='status',
            field=models.CharField(choices=[('On Delivery', 'On Delivery'), ('Delivered', 'Delivered')], db_column='Status', default='On Delivery', max_length=70),
        ),
    ]
