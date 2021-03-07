import './Page.scss';
import Nav from './Nav';
import Intro from './Intro';

export default function Page() {
  return (
    <div className="Page">
      <Nav/>
      <Intro/>
    </div>
  );
}
