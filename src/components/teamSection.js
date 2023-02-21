import React from 'react';
import team1 from '../assets/img/team/team-1.jpg'
import team2 from '../assets/img/team/team-2.jpg'
import team3 from '../assets/img/team/team-3.jpg'
import team4 from '../assets/img/team/team-4.jpg'
import { FaFacebookF,FaInstagram,FaLinkedin,FaTwitter,FaSkype } from 'react-icons/fa';

function Team() {
  return (
    <>
    <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">

          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={team1} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                <div class="social">
                  <a href=""><FaTwitter/></a>
                  <a href=""><FaFacebookF/></a>
                  <a href=""><FaInstagram/></a>
                  <a href=""> <FaLinkedin/> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={team2} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                <div class="social">
                <a href=""><FaTwitter/></a>
                  <a href=""><FaFacebookF/></a>
                  <a href=""><FaInstagram/></a>
                  <a href=""> <FaLinkedin/> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={team3} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                <div class="social">
                <a href=""><FaTwitter/></a>
                  <a href=""><FaFacebookF/></a>
                  <a href=""><FaInstagram/></a>
                  <a href=""> <FaLinkedin/> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={team4} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                <div class="social">
                <a href=""><FaTwitter/></a>
                  <a href=""><FaFacebookF/></a>
                  <a href=""><FaInstagram/></a>
                  <a href=""> <FaLinkedin/> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>

  );
}

export default Team;