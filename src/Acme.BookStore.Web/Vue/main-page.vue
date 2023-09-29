<template>
    <div class="container">
        <div class="p-5 text-center">
            <div class="d-inline-block bg-success text-white p-1 h5 rounded mb-4" role="alert">
                <h5 class="m-1"> <i class="fas fa-rocket"></i> Congratulations, <strong>BookStore</strong> is successfully running!</h5>
            </div>
            <h1>Welcome to the Application</h1>

            <p class="lead px-lg-5 mx-lg-5">{{ $t('LongWelcomeMessage') }}</p>

            <a v-if="!currentUserIsAuthenticated" abp-button="Primary" href="/Account/Login">
                <i class="fa fa-sign-in"></i> {{ $t('Login') }}
            </a>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-auto text-center">
                        <img src="https://abp.io/assets/png/mastering-abp-framework.webp" style="max-width: 400px;" class="w-100 mb-5 my-md-3">
                    </div>
                    <div class="col-md d-flex align-items-center">
                        <div class="pe-0 pe-md-4">
                            <small class="text-uppercase text-muted">THE OFFICIAL GUIDE</small>
                            <h2 class="mb-4">Mastering ABP Framework</h2>
                            <p class="mb-4">
                                Written by the creator of the ABP Framework, this book will help you gain a complete understanding of the framework and modern web application development techniques.
                            </p>
                            <div class="mb-4">
                                <a href="https://www.amazon.com/gp/product/B097Z2DM8Q/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i0" class="btn btn-success mb-1">
                                    Buy on Amazon US
                                </a>
                                <a href="https://www.packtpub.com/product/mastering-abp-framework/9781801079242" class="btn btn-primary mb-1">
                                    Buy on PACKT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-3 text-center">
            <h3>Let's improve your application!</h3>
            <p>Here are some links to help you get started:</p>
        </div>
        <div class="card mt-4 mb-5">
            <div class="card-body">
                <div class="row text-center justify-content-md-center">
                    <!-- Other content goes here -->
                </div>
            </div>
        </div>
        <div class="mt-5 my-3 text-center">
            <h3>Meet the ABP Commercial</h3>
            <p>A Complete Web Application Platform Built on the ABP Framework</p>
        </div>
        <div class="card mt-4 mb-5">
            <div class="card-body">
                <!-- Commercial content goes here -->
            </div>
        </div>
        <div class="mb-5 text-center">
            <p class="align-middle">
                <a href="https://twitter.com/abpframework" target="_blank" class="mx-2"><i class="fa fa-twitter"></i><span class="text-secondary"> Abp Framework</span></a>
                <a href="https://twitter.com/abpcommercial" target="_blank" class="mx-2"><i class="fa fa-twitter"></i><span class="text-secondary"> Abp Commercial</span></a>
                <a href="https://github.com/abpframework/abp" target="_blank" class="mx-2"><i class="fa fa-github"></i><span class="text-secondary"> abpframework</span></a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
    name: "App",
      data() {
        return {
          currentUserIsAuthenticated: false, // Replace with your logic for checking user authentication
        };
      }, 
      computed: {
        $t() {
          // Replace with your translation logic or use a translation library
          return (key) => key;
        },
      },
};
</script>

<style scoped>
    /* Add your component-specific styles here */
</style>
