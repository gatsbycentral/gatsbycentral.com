import React from "react";
import styled from "styled-components";
import { Link as BasicLink } from "gatsby";
// import Twitter from "images/twitter.svg";
// import Facebook from "images/facebook.svg";
// import Github from "images/github.svg";
// import Meetup from "images/meetup.svg";

const Element = styled.div`
  margin-top: 2rem;
  color: white;
  background-color: ${({ theme }) => theme.secondaryColor};
  padding: 0.5rem;
  padding-top: 1rem;
`;

const Content = styled.div`
  max-width: 900px;
  margin: auto;
`;

const Link = styled(BasicLink)`
  color: white;
  text-decoration: none;
  margin-right: 1rem;
`;

const Right = styled.div`
  float: right;
`;

const List = styled.ul`
  display: inline;
  list-style-type: none;
`;

const Item = styled.li`
  display: inline;
  margin-right: 1rem;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  a {
    color: white;
    svg {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
`;

const Footer = props => {
  return (
    <Element>
      <Content>
        &copy; chmac Ltd - <Link to="/privacy">Privacy</Link>
        <Link to="/community">Community</Link>
        <Right>
          <List>
            <Item>
              <a
                href="https://twitter.com/gatsbycentral"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/*<Twitter />*/}
              </a>
            </Item>
            <Item>
              <a
                href="https://www.facebook.com/gatsbycentral/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/*<Facebook />*/}
              </a>
            </Item>
            <Item>
              <a
                href="https://github.com/gatsbycentral"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/*<Github />*/}
              </a>
            </Item>
            <Item>
              <a
                href="https://www.meetup.com/gatsbyjs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/*<Meetup />*/}
              </a>
            </Item>
          </List>
        </Right>
      </Content>
    </Element>
  );
};

export default Footer;
