import PrimaryLayout from '@/common/components/layouts/primary/PrimaryLayout';
import SidebarLayout from '@/common/components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <div className="container p-3 vh-100">
      <button className="btn btn-primary m-3">Sling Academy</button>
      <button className="btn btn-warning m-3">Hello</button>

      <div className="dropdown m-3">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          id="dropdownMenuButton1"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Option 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Option 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Option 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
