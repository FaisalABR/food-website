import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../utils/reducer/foodSlice";

const FoodPage = () => {
  const dataFood = useSelector((state) => state.food.foods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);

  return (
    <div className="country">
      <div className="w-100 min-vh-100">
        <Container>
          <Row>
            <h2 className="fw-bold">Our Foods</h2>
          </Row>
          <Row>
            {dataFood.map((item) => (
              <Col key={item?.idMeal} className="mt-4">
                <Card style={{ width: "18rem" }} className="shadow">
                  <Card.Img variant="top" src={item?.strMealThumb} />
                  <Card.Body>
                    <Card.Title className="text-truncate">
                      {item?.strMeal}
                    </Card.Title>
                    <Link to={`/food/${item?.idMeal}`}>
                      <Button variant="success">See Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FoodPage;
