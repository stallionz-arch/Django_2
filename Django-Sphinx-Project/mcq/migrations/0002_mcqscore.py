# Generated by Django 2.1.5 on 2019-04-04 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mcq', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Mcqscore',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('usermcq', models.CharField(max_length=2000, verbose_name='usermcq')),
                ('score', models.IntegerField(default=0, verbose_name='userscore')),
            ],
        ),
    ]