import { styled } from 'styled-components';

export const PostContentContainer = styled.article`
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  & p {
    font-size: 1.2rem;

    a {
      color: #3294F8;
      text-decoration: none;
      font-weight: 700;
    }
  }

  & p:after {
    content: "";
    display: block;
    margin-bottom: 2rem;
  }

  h3 {
    margin: 2rem 0 1rem;
    font-size: 2rem;
  }

  & pre {
    background: black;
    margin: 1rem 0 2rem;
    padding: 2rem;
    color: #3294F8;
  }

  & blockquote {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 1rem;
    margin-bottom: 1rem;
    border-left: 5px solid #3294F8;
    font-style: italic;

    p:after {
      content: "";
      display: inline;
    }
  }

  & li {
    font-size: 1.5rem;
  }
`;
