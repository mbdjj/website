import styled from "@emotion/styled";

import Wave from "./Wave";
import Button from "../navbar/Button";

import { ReactComponent as GitHub } from "../../images/icons/github.svg";
import { ReactComponent as LinkedIn } from "../../images/icons/linkedin.svg";
import { ReactComponent as Twitter } from "../../images/icons/twitter.svg";

const NameHeader = styled.h1`
  color: rgba(40, 45, 52, 1);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  margin: 0px;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const Title = styled.p`
  color: rgba(167, 169, 172, 1);
  line-height: 1.75rem;
  margin: 0;
`;

const Description = styled.p`
  color: rgba(40, 45, 52, 1);
  max-width: 30rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

function getAge() {
  const today = new Date();
  const birthDate = new Date("2004-02-23");
  const differenceInMilliseconds = today.getTime() - birthDate.getTime();
  const dateSince1970 = new Date(differenceInMilliseconds);
  const age = dateSince1970.getFullYear() - 1970;

  return age;
}

function getArticle(age) {
  return [8, 11, 18].includes(age) ? "an" : "a";
}

function getTitle() {
  const titleArray = [
    "iOS app developer",
    "loved boyfriend",
    "IT student",
    "Yu-Gi-Oh duelist",
    "Rocket League player",
    "SwiftUI enthusiast",
    "Creator of this website",
    "Walut's creator",
    "Apple Developer Program member",
    "マチン・バートミスキ",
  ];
  const randomIndex = Math.floor(Math.random() * titleArray.length);
  return titleArray[randomIndex];
}

function TextBlock() {
  const selectedTitle = getTitle();

  const age = getAge();

  return (
    <div className="text-block">
      <NameHeader>Marcin Bartmiński</NameHeader>
      <Title>{selectedTitle}</Title>
      <Description>
        Hey <Wave>👋</Wave> <br />
        My name is Marcin and I'm {getArticle(age)} {age} year old iOS app
        developer from Poland. I'm currently studying IT at High School in
        Poznań.
      </Description>
      <div className="social-links">
        <a href="https://github.com/mbdjj">
          <Button>
            <GitHub height="22px" />
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/marcin-bartmiński-521a971a1/">
          <Button>
            <LinkedIn height="22px" />
          </Button>
        </a>
        <a href="https://twitter.com/bartmisnki">
          <Button>
            <Twitter height="22px" />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default TextBlock;
