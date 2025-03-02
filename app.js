import React from 'react';
import ReactDOM from 'react-dom/client';

const jsxHeading = <h1 id="heading">Hello from JSX 😁</h1>;

const ContentComponent = () => (
  <p id="title">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
    ipsa aut sunt! Maxime quas ex consectetur voluptatem. Soluta,
    consequatur fugit. Velit, aliquid. Ex cumque natus eveniet aut
    eligendi deleniti unde. 😎
  </p>
);

const copyRight = <span>&copy; 2024</span>;
const Header = <h1>Hello from Header 😊</h1>;
const Footer = <h1 class="footer">Hello from Footer {copyRight}</h1>;

const MainComponent = () => (
  <>
    {Header}
    {ContentComponent()}
    {/* <ContentComponent /> */}
    {Footer}
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<MainComponent />);
