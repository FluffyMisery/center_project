# Generated by Django 3.2.4 on 2021-06-23 20:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('center_app', '0006_contract_startdate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='UserID',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False),
        ),
    ]
