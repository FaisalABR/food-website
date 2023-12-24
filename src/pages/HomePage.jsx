import { Container, Row, Col } from "react-bootstrap";
import aboutUsImage from "../assets/about-us.jpg";
import backgroundTesti from "../assets/background-testi.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import People1 from "../assets/testimonial/people-1.jpg";
import People2 from "../assets/testimonial/people-2.jpg";
import People3 from "../assets/testimonial/people-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Pagination, Navigation } from "swiper/modules";

const HomePage = () => {
  const testimonial = [
    {
      id: 1,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
      image: People1,
      name: "People 1",
      skill: "Food Criticus",
    },
    {
      id: 2,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
      image: People2,
      name: "People 2",
      skill: "Chef",
    },
    {
      id: 3,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
      image: People3,
      name: "People 3",
      skill: "Food Vlogger",
    },
    {
      id: 4,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
      image: People1,
      name: "People 4",
      skill: "Food Criticus",
    },
    {
      id: 5,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
      image: People2,
      name: "People 5",
      skill: "Chef",
    },
    {
      id: 6,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
      image: People3,
      name: "People 6",
      skill: "Food Vlogger",
    },
    {
      id: 7,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
      image: People1,
      name: "People 7",
      skill: "Food Criticus",
    },
    {
      id: 8,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
      image: People2,
      name: "People 8",
      skill: "Chef",
    },
    {
      id: 9,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
      image: People3,
      name: "People 9",
      skill: "Food Vlogger",
    },
  ];
  return (
    <>
      <div className="hero">
        <div className="w-100 min-vh-100">
          <Container>
            <Row className="text-center">
              <h1 className="fw-bold">Foodie.</h1>
              <p>
                Taste the Tradition, Savor the Flavors: Your Culinary Journey
                Begins Here!
              </p>
              <div>
                <button className="btn btn-success me-3">Explore Now</button>
                <button className="btn btn-outline-light">Join with Us</button>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      <div className="about-us">
        <div className="w-100">
          <Container>
            <Row>
              <h2 className="fw-bold">About Us</h2>
            </Row>
            <Row>
              <Col lg={6}>
                <img src={aboutUsImage} alt="about-us image" />
              </Col>
              <Col lg={6} className="pt-lg-4 pt-0 pt-md-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam explicabo accusantium esse eveniet consectetur at,
                  similique eaque aliquam eos tempore nisi perspiciatis nesciunt
                  exercitationem! Magni deserunt sapiente minus ad tenetur.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="advantage">
        <div className="w-100 min-vh-100">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation]}
            className="mySwiper"
          >
            <div
              slot="container-start"
              className="parallax-bg"
              style={{
                "background-image": `url(${backgroundTesti})`,
              }}
              data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                Clean
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  "Clean eating" or often referred to as "clean food" is a
                  dietary philosophy that emphasizes the consumption of natural,
                  fresh foods that are minimally processed and free from
                  additives, preservatives, and synthetic chemicals. The primary
                  principle of clean eating is to choose foods that are
                  minimally processed and closer to their natural state.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                Nutritous
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Nutrition refers to the intake of food and its utilization by
                  the body for growth, energy, and the maintenance of health. It
                  involves the study of nutrients in food, including
                  carbohydrates, proteins, fats, vitamins, and minerals, and how
                  these components nourish the body. A nutritious diet is
                  essential for maintaining good health, as it provides the body
                  with the necessary nutrients for proper functioning and
                  disease prevention. Consuming a balanced diet that includes a
                  variety of whole foods such as fruits, vegetables, whole
                  grains, lean proteins, and healthy fats is crucial for
                  achieving optimal nutrition and overall well-being.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                Halal
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Halal food refers to items that are permissible for
                  consumption under Islamic law. The term 'halal' translates to
                  'permissible' in Arabic and applies to a wide range of food
                  and drinks. For food to be considered halal, it must adhere to
                  specific guidelines outlined in Islamic teachings. This
                  includes the method of slaughter for meat, where animals must
                  be slaughtered by a Muslim, who recites a dedication to Allah
                  while performing the slaughter using a sharp knife to ensure a
                  swift and humane process. Additionally, certain foods and
                  ingredients, such as pork and its by-products, alcohol, and
                  animals not slaughtered according to Islamic principles, are
                  considered haram (forbidden) and are therefore not permissible
                  for consumption by those following Islamic dietary laws. Halal
                  food is not only about the method of preparation but also
                  encompasses the ethical and lawful aspects of food consumption
                  within the Islamic faith
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="testimonial">
        <div className="w-100 min-vh-100">
          <Container>
            <Row>
              <h2 className="fw-bold">Our Testimonial</h2>
            </Row>
            <Row>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {testimonial.map((item) => (
                  <SwiperSlide key={item.id} className="shadow-lg">
                    <p>{item.desc}</p>
                    <div className="people">
                      <img src={item.image} />
                      <div className="d-flex flex-column align-items-start ms-3">
                        <h5 className="fw-bold">{item.name}</h5>
                        <p className="fw-bold">{item.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default HomePage;
