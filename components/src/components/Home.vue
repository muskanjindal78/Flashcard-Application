<template>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Home</title>
    </head>
    <body id="page-top" >

        <header class="masthead bg-primary text-black text-center">
            <div class="container d-flex align-items-center flex-column">
                <router-link to="/Login">
                    <i class="fas fa-file-contract fa-10x" style="color: black;"></i><br><br>
                    <h2 class="masthead-heading text-uppercase mb-0" style = "color:black">"FlashCard"</h2><br>
                    <h2 style="color:black; text-decoration: none;"> Let's do some brain Storming </h2> 
                </router-link>
            </div>
            </header>
        <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    <!-- Footer Location-->
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4"></h4>
                        <p class="lead mb-0">
                            IIT-M BSc Degree
                            <br />
                            MAD-II Project
                        </p>
                    </div>
                    <!-- Footer Social Icons-->
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <!--asl-->
                        <h4 class="text-uppercase mb-4">Muskan Jindal</h4>
                        <h4 class = "text-lowercase mb-4"> 21f1005072</h4>
                    </div>
                    <!-- Footer About Text-->
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">About FlashCard Application</h4>
                        <p class="lead mb-0">
                            Flash is a self review platform for users to review knowledge on any given topic.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </body>
</html>
</template>

<script>
export default {
    name:'home',
    data() {
        return {
            msg : ""
        }
    }
}
</script>
<style>
    @import './static/css/styles.css';
    @import './static/css/styles1.css';
</style>