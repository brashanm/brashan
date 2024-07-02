import styled from "styled-components";

export const List = (props) => {
    const { description, items } = props;
  
    return (
      <>
        {description}
        <ul style={{ marginTop: 5, paddingLeft: '3em' }}>
          {items.map((item) => {
            return (
                <li key={item.description}>
                    {item.description} {item.company !== "" ? <Link href={item.link} target="_blank">{item.company}</Link> : null} {item.emoji}
                </li>
            );
          })}
        </ul>
      </>
    );
};

const Link = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: white;
    &:hover {
        color: #1E90FF;
        transform: scale(1.33);
    }
`;