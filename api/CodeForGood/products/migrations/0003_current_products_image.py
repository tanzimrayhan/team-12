# Generated by Django 2.0.1 on 2018-10-06 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_current_products_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='current_products',
            name='image',
            field=models.ImageField(blank=True, upload_to='items_images'),
        ),
    ]