<template>
    <body class="masthead bg-primary text-white text-center">
            <!-- <div class="container d-flex align-items-center flex-column"> -->
                <!-- <img class="masthead-avatar mb-5" src="eight-23.jpg" alt="..." /> -->
                <!-- {% for c in cards %} -->
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <!-- <h5 class="card-title">{{c}}</h5> -->
                        <br>
                        <br>
                        <!-- <p class="card-subtitle mb-2 text-muted">{{cards[c]}}</p> -->
                    </div>
                <div>
                <!-- {% endfor %} -->
                  <form method = 'POST'>
                    <div class="d-flex flex-row">
                      <label for="inputusername"><b>Front: </b></label> &nbsp;&nbsp;&nbsp;
                      <!-- <input class="form-control" type="text" placeholder="front" name="front" value="{{request.form.front}}"> -->
                    </div>
                    <br>
                    <div class="d-flex flex-row">
                    <button type="submit" class="btn btn-outline-primary mb-3" id = "submit">Submit</button>
                    </div>
                  </form>
                </div>
            </div>
        </body>
</template>

<style>
    @import './static/css/styles1.css';
</style>