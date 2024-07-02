import styled from "styled-components";

const socials = [
    {
        icon: "fa-brands fa-linkedin",
        link: "https://www.linkedin.com/in/brashan/"
    },
    {
        icon: "fa-brands fa-github",
        link: "https://github.com/brashanm"
    },
    {
        icon: "fa-brands fa-app-store-ios",
        link: "https://apps.apple.com/us/developer/brashan-mohanakumar/id1725750347"
    },
    // {
    //     icon: "fa-solid fa-envelope",
    //     link: "mailto: bmohanak@uwaterloo.ca"
    // },
    // {
    //     icon: "fa-solid fa-file-lines",
    //     link: ""
    // },
]

const Link = styled.a`
    font-weight: bold;
    font-size: 1.5em;
    text-decoration: none;
    color: white;
    transition: all 300ms ease;
    &:hover {
        color: #1E90FF;
        transform: scale(1.5);
    }

    @media only screen and (max-width: 768px) {
        font-size: 2em;
    }
`;

const Bar = styled.div`
    display: flex;
    padding-block: 1em;
    width: 75%;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 800px) {
       width: 90%;
    }
    @media only screen and (min-width: 684px) {
       padding-block: 2em;
    }
`;

function Socials() {
    return (
        <Bar>
            {socials.map((social) => {
                return (
                    <Link href={social.link} target="_blank">
                        <i class={social.icon}></i>
                    </Link>
                );
            })}
        </Bar>
    );
};

export default Socials;