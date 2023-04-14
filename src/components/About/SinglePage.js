import { useParams } from 'react-router-dom';
import './SinglePage.css';

const aboutData = [
  {
    slug: 'about-app',
    title: 'About the app',
    description:
      `This application let's us add to-dos, edit, and delete items.
       It also add time-stamps whenever you edit the previous to-dos.
       It also allows you cutomize the background animation of main page(home page only yet)`,
  },
  {
    slug: 'about-developer',
    title: 'About the developer',
    description:
      '❤️ Anonymous ❤️ \n Maybe you can Checkout Contact Page to get to know more (‾◡◝)',
  },
];

const SinglePage = () => {
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <div className="main_content">
      <h2>{title}</h2>
      <div>
        {description.split('\n').map((item, i) => <p key={i}>{item}</p>)}
      </div>
    </div>
  );
};
export default SinglePage;