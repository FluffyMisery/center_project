# Generated by Django 3.2.4 on 2021-06-22 21:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('center_app', '0003_alter_contract_apartmentid'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='Photo',
            field=models.ImageField(blank=True, null=True, upload_to='', verbose_name='Изображение'),
        ),
    ]
