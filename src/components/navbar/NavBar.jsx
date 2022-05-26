import Button from "./Button";
import memoji from "../../images/memoji.png";

function NavBar() {
  return (
    <nav>
      <a href="#">
        <Button>
          <img src={memoji} height={"22px"}></img>
        </Button>
      </a>
      <a href="#projects">
        <Button>Projects</Button>
      </a>
    </nav>
  );
}

export default NavBar;
