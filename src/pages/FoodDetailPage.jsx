import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const FoodDetailPage = () => {
  const { id } = useParams();
  const [fetchFood, setFetchFood] = useState();
  console.log(id);

  useEffect(() => {
    const fetchSingleFood = async (id) => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
        );
        setFetchFood(res.data.meals[0]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSingleFood(id);
  }, []);

  console.log(fetchFood?.strTags);

  return (
    <div className="foodpage">
      <div className="w-100 min-vh-100">
        <Container>
          <Row>
            <h2 className="fw-bold">{fetchFood?.strMeal}</h2>
          </Row>
          <Row>
            <Col lg={6} className="text-center">
              <img src={fetchFood?.strMealThumb} alt="food" />
            </Col>
            <Col lg={6} className="pt-lg-0 pt-5">
              <h3 className="fw-bold">Instructions</h3>
              <p>{fetchFood?.strInstructions}</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <h2 className="fw-bold">Tutorial Video</h2>
              <div className="youtube-container d-flex flex-column justify-content-center align-items-center">
                <iframe
                  className="youtube-frame"
                  src={fetchFood?.strYoutube.replace("/watch?v=", "/embed/")}
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FoodDetailPage;
