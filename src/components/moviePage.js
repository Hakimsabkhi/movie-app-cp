import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import data from "../data/movieData";

const MoviePage = () => {
  let { id } = useParams();
  let specificMovie = data.filter((el) => el.id === id);

  return (
    <div>
      {specificMovie &&
        specificMovie.map((el) => (
          <Card style={{ marginTop: "100px", width: "800px", margin: "auto" }}>
            <Card.Body>
              <center>
                <iframe
                  src={el.trailerURL}
                  width="650"
                  height="400"
                  title="Youtube Video Player"
                ></iframe>
              </center>
              <Card.Title> {el.title} </Card.Title>
              <Card.Text>{el.description}</Card.Text>
              <Button variant="primary">
                <Link
                  style={{ textDecoration: "none", color: "White" }}
                  to={"/"}
                >
                  Back Home
                </Link>
              </Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default MoviePage;