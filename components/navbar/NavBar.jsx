import Button from "./Button";

function NavBar() {
  return (
    <nav>
      <a href="#">
        <Button>
          <img src="/images/memoji.png" height={"22px"}></img>
        </Button>
      </a>
      <a href="#projects">
        <Button>Projects</Button>
      </a>
    </nav>
  );
}

export default NavBar;
