import { styled } from "styled-components";
import happyPortrait from "../assets/happyPortrait.png"
import EasterEggs from "./Typewriter"
import internships from "../data/internships";
import hobbies from "../data/hobbies";
import { List } from "./List";
import Socials from "./Socials";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3em;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 970px) {
        flex-direction: column;
    }
`;

const Headshot = styled.img`
    max-width: 12em;
    max-height: 12em;
    // margin-top: 1.5em;
    border-radius: 50%;
    @media only screen and (min-width: 800px) {
        margin-right: 2em;
    }
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 800px) {
        margin-left: 2em;
    }
`;

const Title = styled.h1`
    font-size: 3em;
    @media only screen and (max-width: 800px) {
        font-size: 2.5em;
    }
    @media only screen and (max-width: 683px) {
        padding-block: 1em;
    }

    @media only screen and (max-width: 402px) {
        font-size: 3em;
    }
`;

const Body = styled.div`
    font-size: 1.125em;
`;

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    margin-block: 2em;

    @media only screen and (max-width: 600px) {
        margin-top: 40px;
        font-size: 0.875em;
    }
`;

const Block = styled.div`
    padding-block: 0.75em;
    word-wrap: break-word;
`;

const Linked = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: white;
    &:hover {
        color: #1E90FF;
        transform: scale(1.33);
    }
`;

function Home() {
    return (
        <Wrapper>
            <Header>
                <Headshot src={happyPortrait} alt="portrait"></Headshot>
                <Top>
                    <Title>
                        Hey there, I'm Brashan <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand%20Medium%20Skin%20Tone.png" alt="Waving Hand Medium Skin Tone" width="90" height="90" />
                    </Title> 
                    <Socials />
                </Top>
            </Header>
            <EasterEggs />
            <Body>
                <Block>
                    <b>Welcome to my (small) slice of the internet!</b> I'm a 4A Computer Science student at the <Linked href="https://uwaterloo.ca/" target="_blank">University of Waterloo</Linked>.
                    This summer, I'll be doing some really cool stuff as a software engineer intern at <Linked href={"https://www.linkedin.com/company/stackadapt/"} target="_blank">StackAdapt</Linked>, on the Customer Data Platform team.
                </Block>
                <Block>
                    <List description="Previously, I..." items={internships} />
                </Block>
                <Block>
                    <List description="I'm not always coding though! Outside of tech, you can find me..." items={hobbies} />
                </Block>
                <Block>Be it making it easy for gym enthusiasts to track their progress with <Linked href="https://github.com/brashanm/MtProgress" target="_blank">Mount Progress</Linked>, spreading The Weeknd's lyrics worldwide through multilingual translations with <Linked href="https://github.com/brashanm/Abelese" target="_blank">Abelese</Linked>, or my current venture, <b>Anther</b>, which aims to revolutionize health and wellness through AI, I've always been driven to innovate and create impactful projects that touch the lives of many.</Block>
                <Block>Whether it's about new opportunities, someone to play poker with, or sitcom recommendations, I'm always eager to connect with more people! Feel free to reach out <Linked href="https://www.linkedin.com/in/brashan/" target="_blank">here</Linked> or through my <Linked href="mailto:bmohanak@uwaterloo.ca" target="_blank">email</Linked>.</Block>
            </Body>
            <Footer><h4>Made with <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Heart%20Suit.png" alt="Heart Suit" width="25" height="25" /> by Brashan Mohanakumar</h4></Footer>
        </Wrapper>
    )
}


export default Home;