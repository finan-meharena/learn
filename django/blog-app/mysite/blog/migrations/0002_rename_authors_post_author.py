# Generated by Django 5.0.10 on 2025-01-03 05:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='authors',
            new_name='author',
        ),
    ]
