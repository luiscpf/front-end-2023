<template>
    <footer class="bg-primary text-center text-lg-start text-white">
        <!-- Grid container -->
        <div class="container p-4">
        <!--Grid row-->
        <div class="row my-4">
            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
    
            <div class="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style="width: 150px; height: 150px;">
                <img :src="footer" height="70" alt=""
                    loading="lazy" />
            </div>
    
            <p class="text-center">Homless animal shelter The budgetary unit of the Capital City of Warsaw</p>
    
            <ul class="list-unstyled d-flex flex-row justify-content-center">
                <li>
                <a class="text-white px-2" href="#!">
                    <i class="fab fa-facebook-square"></i>
                </a>
                </li>
                <li>
                <a class="text-white px-2" href="#!">
                    <i class="fab fa-instagram"></i>
                </a>
                </li>
                <li>
                <a class="text-white ps-2" href="#!">
                    <i class="fab fa-youtube"></i>
                </a>
                </li>
            </ul>
    
            </div>
            <!--Grid column-->
    
            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Animals</h5>
    
            <ul class="list-unstyled">
                <li class="mb-2">
                <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>When your pet is missing</a>
                </li>
                <li class="mb-2">
                <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Recently found</a>
                </li>
                <li class="mb-2">
                <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>How to adopt?</a>
                </li>
                <li class="mb-2">
                <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Pets for adoption</a>
                </li>
                <li class="mb-2">
                <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Material gifts</a>
                </li>
                <li class="mb-2">
                <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Help with walks</a>
                </li>
                <li class="mb-2">
                <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Volunteer activities</a>
                </li>
            </ul>
            </div>
            <!--Grid column-->
    
            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Animals</h5>
    
            <ul class="list-unstyled">
                <li class="mb-2">
                <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>General information</a>
                </li>
                <li class="mb-2">
                <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>About the shelter</a>
                </li>
                <li class="mb-2">
                <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Statistic data</a>
                </li>
                <li class="mb-2">
                <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Job</a>
                </li>
                <li class="mb-2">
                <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Tenders</a>
                </li>
                <li class="mb-2">
                <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Contact</a>
                </li>
            </ul>
            </div>
            <!--Grid column-->
    
            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Contact</h5>
    
            <ul class="list-unstyled">
                <li>
                <p><i class="fas fa-map-marker-alt pe-2"></i>Warsaw, 57 Street, Poland</p>
                </li>
                <li>
                <p><i class="fas fa-phone pe-2"></i>+ 01 234 567 89</p>
                </li>
                <li>
                <p><i class="fas fa-envelope pe-2 mb-0"></i>contact@example.com</p>
                </li>
            </ul>
            </div>
            <!--Grid column-->
        </div>
        <!--Grid row-->
        </div>
        <!-- Grid container -->
    
        
    </footer>
</template>


<script setup>

import footer from '@/assets/footer.jpg'


</script>

<style>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 20px 0; /* adjust the padding as needed */
}
</style>

