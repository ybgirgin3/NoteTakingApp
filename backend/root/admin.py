from django.contrib import admin
from django.apps import apps

# Register your models here.

class ModelAdmin(admin.ModelAdmin):
    def __init__(self, model, admin_site):
        self.list_display = [field.name for field in model._meta.fields]
        self.search_field = [field.name for field in model._meta.fields]

        super().__init__(model, admin_site)


for model in apps.get_models():
    try:
        # if model not in (auth.models.Group, auth.models.User):
        admin.site.register(model, ModelAdmin)
    except admin.sites.AlreadyRegistered:
        pass

