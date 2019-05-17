from django.urls import path

from main import views as m_views

urlpatterns = [
                  path('', m_views.HomePageView.as_view(), name='home'),
              ]
