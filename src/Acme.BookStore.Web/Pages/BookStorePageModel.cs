using Acme.BookStore.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Acme.BookStore.Web.Pages;

public abstract class BookStorePageModel : AbpPageModel
{
    protected BookStorePageModel()
    {
        LocalizationResourceType = typeof(BookStoreResource);
    }

    public string AppProxyScriptPath => "~/app-proxy.js";
    public string HomeAppProxyScriptPath => "/client-proxies/app-proxy.js";
}
