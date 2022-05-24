import styled from "@emotion/styled"

import Wave from "./Wave"

const NameHeader = styled.h1`
    color: rgba(40, 45, 52, 1);
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1;
    margin: 0px;
`

const Title = styled.p`
    color: rgba(167, 169, 172, 1);
    line-height: 1.75rem;
    margin: 0;
`

const Description = styled.p`
    color: rgba(40, 45, 52, 1);
    max-width: 30rem;
`

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

function TextBlock() {

    const titleArray = ["iOS app developer", "loved boyfriend", "IT student"]
    const randomIndex = Math.floor(Math.random() * titleArray.length)
    const selectedTitle = titleArray[randomIndex]

    const age = getAge()

    return <div className="text-block">
        <NameHeader>Marcin Bartmiński</NameHeader>
        <Title>{selectedTitle}</Title>
        <Description>
            Hey <Wave>👋</Wave> <br />
            My name is Marcin and I'm {getArticle(age)} {age} year old beginner iOS app developer from Poland. I'm currently studying IT at High School in Poznań.
        </Description>
    </div>
}

export default TextBlock