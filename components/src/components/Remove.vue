<template>
    <body class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <!-- <img class="masthead-avatar mb-5" src="eight-23.jpg" alt="..." /> -->
                <form class="col g-3" method = "POST">
                  <div class="d-flex flex-row">
                      <label for="inputusername"><b>Deck ID:</b></label> &nbsp;&nbsp;&nbsp;
                      <!-- <input class="form-control" type="text" placeholder="deckId" name="deckId" value="{{request.form.deckId}}"> -->
                  </div>
                  <br>
                  <div class="d-flex flex-row">
                    <button type="submit" class="btn btn-outline-primary mb-3" id = "submit">Submit</button>                
                  </div>
                </form>
            </div>

        </body>
</template>

<style>
    @import './static/css/styles1.css';
</style>