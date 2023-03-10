import React from 'react';
import portfolio1 from '../assets/img/portfolio/portfolio-1.jpg'
import portfolio2 from '../assets/img/portfolio/portfolio-2.jpg'
import portfolio3 from '../assets/img/portfolio/portfolio-3.jpg'
import portfolio4 from '../assets/img/portfolio/portfolio-4.jpg'
import portfolio5 from '../assets/img/portfolio/portfolio-5.jpg'
import portfolio6 from '../assets/img/portfolio/portfolio-6.jpg'
import portfolio7 from '../assets/img/portfolio/portfolio-7.jpg'
import portfolio8 from '../assets/img/portfolio/portfolio-8.jpg'
import portfolio9 from '../assets/img/portfolio/portfolio-9.jpg'

function Portfolio() {
  return (
    <>
    <section id="portfolio" class="portfolio">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <ul id="portfolio-flters" class="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <li data-filter="*" class="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-img"><img src={portfolio1} class="img-fluid" alt=""/></div>
            {/* <div class="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href={portfolio1} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div> */}
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-img"><img src={portfolio2} class="img-fluid" alt=""/></div>
            {/* <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href={portfolio2} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div> */}
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-img"><img src={portfolio3} class="img-fluid" alt=""/></div>
            {/* <div class="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href={portfolio3} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div> */}
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-img"><img src={portfolio4} class="img-fluid" alt=""/></div>
            {/* <div class="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href={portfolio4} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div> */}
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-img"><img src={portfolio5} class="img-fluid" alt=""/></div>
            {/* <div class="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href={portfolio5} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div> */}
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-img"><img src={portfolio6} class="img-fluid" alt=""/></div>
            {/* <div class="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href={portfolio6} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div> */}
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-img"><img src={portfolio7} class="img-fluid" alt=""/></div>
            {/* <div class="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a href={portfolio7} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div> */}
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-img"><img src={portfolio8} class="img-fluid" alt=""/></div>
            {/* <div class="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a href={portfolio8} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div> */}
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-img"><img src={portfolio9} class="img-fluid" alt=""/></div>
            {/* <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href={portfolio9} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div> */}
          </div>

        </div>

      </div>
    </section>
    </>

  );
}

export default Portfolio;