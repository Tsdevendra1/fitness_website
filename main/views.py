from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView


class HomePageTemplateView(TemplateView):
    template_name = 'main/base.html'
