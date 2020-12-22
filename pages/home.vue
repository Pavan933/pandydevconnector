<template>
  <div class="container-scroller">
    <div
      class="banner-wrapper"
      :style="{ 'background-image': 'url(' + require('~/assets/images/dashboard/about-banner.jpg') + ')' }"
    >
      <div class="custom-container">
        <div class="row">
          <div class="col-md-12">
            <nav class="navbar navbar-expand-lg">
              <nuxt-link class="navbar-brand" to="/"><img src="~/assets/images/PRISMM.png" alt=""/></nuxt-link>
              <div class="d-flex justify-content-end align-items-center">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="mdi mdi-menu"></span>
                </button>
                <div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-end">
                  <ul class="navbar-nav pr-3">
                    <!--  <li class="nav-item active">
                  <nuxt-link class="nav-link" to="#">Home</nuxt-link>
                </li> -->
                    <li class="nav-item">
                      <nuxt-link class="nav-link" to="home">Home</nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div class="row py-sm-5 py-0">
          <div class="col-lg-7 banner-content">
            <h1 class="mr-2 text-white lato">Move your classes to online in 3 Steps</h1>
            <h4 class="font-weight-light text-white pt-2 pb-2">
              Conduct regular online live classes, monitor students, share notes and give tests all from one app.
            </h4>
            <div class="my-5">
              <nuxt-link class="btn btn-secondary btn-lg mr-2 mb-3" to="/register">Get Started Now</nuxt-link>
              <a class="btn btn-secondary btn-lg mr-2 mb-3" href="#intro">Know more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="intro" class="details-wrapper">
      <div class="section-wrap">
        <div class="section1 pl-5 pr-5 pb-5">
          <div class="row mt-2 mb-2">
            <div class="col-md-10 mx-auto py-5 text-center">
              <h1 class="pt-3 pb-3">What is Prismm</h1>
              <p class="font-weight-light sub-para">
                Prismm® is global on-demand online platform for schools for end to end learning that enables
                academic institutions, schools, colleges and educational universities to deliver their schooling online
                while students learn from anywhere, anytime on any device of their choice. Prismm ® provides end to
                end coverage for any educational body to deliver live as well offline classes using great of cutting
                edge technology solutions, ensuring schools are able to deliver the course, curriculum or helpthem
                educate for competitive or boards exam etcby engaging into live classes, video lessons, Assessments,
                chapter wise tests, books, class notes, real time mock exams, detailed analysis and reporting, adaptive
                learning, personalized Answer feedback and mentoring etcat the comfort of the home and helping to
                improve productivity of the students at same time.
              </p>
            </div>
          </div>
          <div class="feature-list">
            <div class="row feature-list-row text-center">
              <div class="col-lg-4 feature-list-item">
                <img src="~/assets/images/icons/custom/onBoarding.png" />
                <h3>Simple Onboarding process</h3>
                <p class="feature-description">
                  A very simple onboarding process for the school to get you started within 3 minutes
                </p>
              </div>
              <div class="col-lg-4 feature-list-item">
                <img src="~/assets/images/icons/custom/graduate.png" />
                <h3>Your own Branded Web App</h3>
                <p class="feature-description">
                  Use out of box readily available features fully customizable as per school requirements
                </p>
              </div>
              <div class="col-lg-4 feature-list-item">
                <img src="~/assets/images/icons/custom/savings.png" />
                <h3>96% Cost Savings</h3>
                <p class="feature-description">
                  More cost savings as compared to building your own app which could cost you millions of dollars.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="section2 pl-5 pr-5">
          <div class="row mt-2">
            <div class="col-md-10 mx-auto pt-5 text-center">
              <h1 class="pt-3 pb-3">How does Prismm<sup>®</sup> works</h1>
            </div>
          </div>
          <div class="feature-list">
            <div class="row feature-list-row text-center">
              <div class="col-lg-4 feature-list-item">
                <img src="~/assets/images/icons/custom/permission.png" />
                <h3>Step 1 – Register with us</h3>
                <p class="feature-description">
                  Register and set up your school online in 3 minutes. We will setup the platform and scale as per your
                  demand within no time once you register with us.
                </p>
              </div>
              <div class="col-lg-4 feature-list-item">
                <img src="~/assets/images/icons/custom/online-class.png" />
                <h3>Step 2 – Onboard School</h3>
                <p class="feature-description">
                  Bring your all classes, students and teachers and staff online when you on-board the school to our
                  platform ensuring smooth operations of the school as usual.
                </p>
              </div>
              <div class="col-lg-4 feature-list-item">
                <img src="~/assets/images/icons/custom/video-call.png" />
                <h3>Step 3 – Interactive Live Class</h3>
                <p class="feature-description">
                  Time to host live class with supporting interactive learning material, live video classes with your
                  own school staff and teachers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="section3 pl-5 pr-5 ">
          <div class="row mt-3">
            <div class="col-md-12 pt-5 text-center">
              <h1>On-demand Platform for Schools</h1>
            </div>
            <div class="feature-list pt-5">
              <div class="row feature-list-row text-center">
                <div class="col-lg-4 feature-list-item">
                  <img src="~/assets/images/icons/custom/solutions.png" />
                  <h3>Complete Online solution for School</h3>
                  <p class="feature-description">
                    Prismm is a complete on-demand solution for the school, where you enjoy the benefits of hosting
                    both live classes as well as online e-learning material for students as required.
                  </p>
                </div>
                <div class="col-lg-4 feature-list-item">
                  <img src="~/assets/images/icons/custom/schedule.png" />
                  <h3>Create your own class schedule</h3>
                  <p class="feature-description">
                    Offers complete flexibility to host and schedule classes as per your own school time table. School
                    can follow same pattern as normally followed in the schools.
                  </p>
                </div>
                <div class="col-lg-4 feature-list-item">
                  <img src="~/assets/images/icons/custom/teacher.png" />
                  <h3>Onboard your school resources</h3>
                  <p class="feature-description">
                    Solution offers flexibility to BYOT (bring your own teacher), allowing schools to engage with school
                    students and with same set of school teachers and staff. Follow same timetable for live classes.
                  </p>
                </div>
              </div>
              <div class="row feature-list-row text-center">
                <div class="col-lg-4 feature-list-item">
                  <img src="~/assets/images/icons/custom/bandwidth.png" />
                  <h3>Create unlimited online Class periods</h3>
                  <p class="feature-description">
                    Host as many daily live and on-line classes as per schools daily requirements, without worrying
                    about scaling the solution at backend. We got you covered.
                  </p>
                </div>
                <div class="col-lg-4 feature-list-item">
                  <img src="~/assets/images/icons/custom/settings.png" />
                  <h3>Customizable e-learning modules</h3>
                  <p class="feature-description">
                    Each schools are offered numerous amount of online storage to upload and go-live with your own
                    school specific e-learning modules as per curriculum followed in your school.
                  </p>
                </div>
                <div class="col-lg-4 feature-list-item">
                  <img src="~/assets/images/icons/custom/geography.png" />
                  <h3>Teach anytime, anywhere</h3>
                  <p class="feature-description">Customization will be easy as we understand your pain.</p>
                </div>
              </div>
              <div class="row feature-list-row text-center">
                <div class="col-lg-4 feature-list-item">
                  <img src="~/assets/images/icons/custom/time (1).png" />
                  <h3>Subscription based pricing</h3>
                  <p class="feature-description">
                    On-demand subscription based pricing which offers you complete control on your online delivery needs
                    for your school. Only pay for what you would like to use model.
                  </p>
                </div>
                <div class="col-lg-4 feature-list-item">
                  <img src="~/assets/images/icons/custom/shield.png" />
                  <h3>100% secured content & delivery</h3>
                  <p class="feature-description">
                    Prismm solution uses secured encryption methods and real-time voice encryption which allows for
                    secure class meetings online as well as secured storage of interactive learning content online, only
                    accessible to you and your school resources.
                  </p>
                </div>
                <div class="col-lg-4 feature-list-item">
                  <img src="~/assets/images/icons/custom/result.png" />
                  <h3>Detailed reporting metrics</h3>
                  <p class="feature-description">
                    Offers very insightful metrics about the overall performance of the school, students, teachers as
                    well as staff. Create your own customer announcement and notifications for the school users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section4 pl-5 pr-5">
          <div class="row">
            <div class="col-md-10 mx-auto py-5 text-center">
              <h3>Introducing</h3>
              <h1 class="pt-2 pb-3">On-demand Virtual Classrooms</h1>
              <p class="font-weight-light sub-para">
                We are glad to introduce first global on-demand "Virtual classroom"feature which uses a new
                revolutionary functionality which would transform the conventional classroom teaching by connecting
                students and teachers across the globe without the need for any physical classroom at all. Teachers
                could <span>teach, manage, interact</span> with students from anywhere across the globe, almost in same
                way as they would face to face in the class.
              </p>
            </div>
          </div>
        </div>
        <div
          class="section5 pl-5 pr-5"
          :style="{ 'background-image': 'url(' + require('~/assets/images/dashboard/cover-1.jpg') + ')' }"
        >
          <div class="row">
            <div class="col-md-10 mx-auto py-5 text-right">
              <h1 class="pt-2 pb-2">Do you own or run a school, college or University ?</h1>
              <h3>Move your classes to online in 3 simple steps</h3>
              <nuxt-link class="btn btn-secondary btn-lg mr-2 mb-3 mt-3" to="/register">Get Started Now</nuxt-link>
              <nuxt-link class="btn btn-secondary btn-lg mr-2 mb-3 mt-3" to="/login">Login</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  auth: false,
  layout: 'cmsPage'
}
</script>
<style scoped>
.lato {
  font-family: 'Lato';
  font-weight: 900;
}
.custom-container {
  padding: 0 50px;
}
.banner-wrapper {
  /* 
    background: url("~/assets/images/dashboard/about-banner.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.banner-wrapper .navbar {
  background: none;
  padding: 50px 0;
}
.banner-wrapper .navbar .navbar-brand {
  width: 170px;
}
.banner-wrapper .navbar .navbar-brand img {
  width: 100%;
}
.banner-wrapper .navbar .navbar-nav .nav-link {
  color: #fff;
  font-size: 16px;
  padding-left: 18px;
  padding-right: 18px;
  font-family: Lato;
  font-weight: 700;
}
.banner-wrapper .navbar .navbar-toggler {
  border: 1px solid #fff;
  color: #fff;
}
.banner-wrapper .banner-content {
  padding: 45px 15px;
}
.banner-wrapper .banner-content h1 {
  font-size: 46px;
}
.banner-wrapper .banner-content h3 {
  font-size: 36px;
}
.details-wrapper {
  padding: 50px 0 0px 0;
  background: #fff;
}
.details-wrapper .card-icon-top {
  position: relative;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.details-wrapper .card-icon-top .card-icon {
  top: -38px;
  left: calc(50% - 30px);
  height: 70px;
  width: 70px;
  position: absolute;
}
.details-wrapper .card-icon-top h4 {
  font-size: 30px;
}
.details-wrapper .card-icon-top .card-text {
  font-size: 18px;
}
.sub-para {
  font-size: 18px;
}
.sub-para span {
  font-weight: bold;
}
.details-wrapper .card-item-preview {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05), 0 5px 15px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  position: relative;
}
.details-wrapper .card-item-preview .badge {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  position: absolute;
  right: -32px;
  top: -38px;
  padding-top: 25px;
  font-size: 24px;
}
.details-wrapper .feature-list {
  padding: 0 100px;
}
.details-wrapper .feature-list-row .feature-list-item img {
  width: 100px;
  padding: 30px 0;
}
.details-wrapper .feature-list-row .feature-list-item i {
  font-size: 45px;
  display: block;
  padding: 40px 0;
}
.details-wrapper .feature-list-row .feature-list-item .feature-description {
  font-size: 17px;
  padding-bottom: 20px;
}
.section2 {
  background: linear-gradient(to top left, #333399, #ec42a9);
  color: #fff;
}
.section3 {
  background-size: 100%;
  background-repeat: no-repeat;
}
.section4 {
  background: linear-gradient(to top left, #333399, #ec42a9);
  background-size: 100%;
  background-repeat: no-repeat;
  color: white;
}
.section5 {
  background-size: 100%;
  background-repeat: no-repeat;
}

@media screen and (max-width: 768px) {
  .banner-wrapper {
    background-position: center;
  }
  .details-wrapper .feature-list {
    padding: 0px;
  }
  .banner-wrapper .banner-content h1 {
    font-size: 40px;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    justify-content: space-between;
  }
}
</style>
