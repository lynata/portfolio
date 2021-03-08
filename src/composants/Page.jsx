import './Page.scss';
import Nav from './Nav';
import Intro from './Intro';
import ListeProjets from './ListeProjets';

export default function Page() {
  return (
    <div className="Page">
      <Nav/>
      <Intro/>
      <ListeProjets/>
    </div>
  );
}
