import Button from "./Button";
import memoji from "../../images/memoji.png";

function NavBar() {
  return (
    <nav>
      <a
        href="https://bartminski.ga"
        style={{ textDecoration: "none" }}
      >
        <Button>
          <img src={memoji} height={"22px"}></img>
        </Button>
      </a>
    </nav>
  );
}

export default NavBar;
