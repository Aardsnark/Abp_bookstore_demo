using System.Threading.Tasks;
using Acme.BookStore.Web.Pages;
using Microsoft.AspNetCore.Authentication;

namespace Acme.BookStore.Web.Views.Home;

public class IndexModel : BookStorePageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
