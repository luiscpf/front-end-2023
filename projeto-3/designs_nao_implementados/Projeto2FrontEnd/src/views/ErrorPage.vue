<template>
  <div id="app" class="container-fluid m-0 p-0 ">

    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>404 Error Page</title>
    </head>

    <body>
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
          <h1 class="display-1 fw-bold">404</h1>
          <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
          <p class="lead">
            The page you are looking for it does not exit.
          </p>
          <a class="btn btn-primary"><router-link to="/" style="color: #ffffff;">Home Page</router-link></a>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage'
};
</script>
  


