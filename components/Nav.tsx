import React, {
  useState,
  useEffect,
  EventHandler,
  SyntheticEvent,
} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

const Links = [
  { name: "Home", path: "/" },
  { name: "Landlords", path: "/gallery" },
  { name: "Tenants", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

export default function Nav() {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(0);
  const [main, setMain] = useState<HTMLElement>();
  const [path, setPath] = useState("");

  const handleToggle = (e?: SyntheticEvent, options?: string) => {
    if (main) {
      if (width > 767) return null;
      else if (options == "close") {
        setToggle(false);
        main.style["display"] = "";
        return null;
      } else if (toggle) {
        main.style.display = "";
      } else {
        main.style.display = "none";
      }
    }

    return toggle ? setToggle(false) : setToggle(true);
  };

  useEffect(() => {
    setPath(router.pathname);
    let widthOnLoad = window.innerWidth;
    let main = document.getElementById("main")!;
    if (main) {
      setMain(main);
    }
    setWidth(widthOnLoad);
    window.onresize = () => {
      let width = window.innerWidth;
      setWidth(width);
      if (width > 767) {
        setToggle(false);
        main.style.display = "";
      }
    };
  }, [main, router.pathname]);

  return (
    <>
      <Navbar path={path}>
        <header>
          <Link
            href="/"
            onClick={(e) => {
              handleToggle(e, "close");
              setPath("/");
            }}
          >
            Ifechiworks.<span>com</span>
          </Link>
        </header>
        <LinksContainer toggle={toggle}>
          {Links.map((link, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  handleToggle();
                  setPath(link.path);
                }}
                className={router.pathname == link.path ? "active" : ""}
              >
                <Link href={link.path} scroll={false}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </LinksContainer>
        <Toggle onClick={handleToggle} id="toggle-button">
          <span>menu</span>
        </Toggle>
      </Navbar>
    </>
  );
}

const Navbar = styled.nav<{ path: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  min-height: 10vh;
  display: flex;
  align-items: center;
  z-index: 99;
  margin: 0;
  padding: 0 1em;

  header {
    font-size: 1.8em;
    font-weight: 500;
    color: white;
    z-index: 999;

    span {
      font-size: 0.7rem;
    }
  }

  @media only screen and (min-width: 767px) {
    padding: 0 3em;
    flex-direction: row;
    align-items: center;
    height: 10vh;
    max-height: 200px;
    width: 100%;
  }
`;



const Toggle = styled.button<{
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}>`
  position: fixed;
  top: 18px;
  left: 84vw;
  width: 32px;
  height: 32px;
  border: 2px solid white;
  border-radius: 50%;
  background: transparent;
  text-align: center;

  span {
    position: absolute;
    top: 30px;
    left: 0;
    font-size: 10px;
    color: white;
    font-family: "montserrat", sans-serif;
    display: block;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.08);
  }

  :focus {
    outline: none;
  }
  :active {
    transform: scale(0.8);
    background: white;
  }

  @media only screen and (min-width: 767px) {
    display: none;
  }
`;

const LinksContainer = styled.ul<{ toggle: boolean }>`
  list-style: none;
  justify-self: center;
  outline: 1px solid red;
  margin: auto;
  

  a {
    display: none;
    font-size: 14px;

    &:hover {
      transform: scale(1.02);
      color: rebeccapurple;
      font-weight: bold;
    }
  }
  & .active {
    font-weight: 600;
  }

  ${(props) =>
    props.toggle &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      margin: 0;
      padding: 8em 0;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background: black;
      gap: 2em;
      a {
        display: block;
      }
      .navlinks {
        display: block;
        margin: 5px 0;
      }
    `}

  @media only screen and (min-width: 767px) {
      position: relative;
      display:flex;
      flex-direction: row;
      margin: auto;
      justify-content: space-evenly;
      align-items: center;
      top: 0;
      gap: 1em;
      padding: 0;
      max-height: 8vh;
      background: transparent;

      a {
        display: block;
        width: fit-content;
        padding: 0.5em 1em;
        position: relative;
        &:hover {
          text-decoration: underline;
          font-weight: 600;
          transform: scale(1.15);
        }
      }

  }
`;
