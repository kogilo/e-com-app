import { Outlet } from 'react-router-dom';
import { Header, Navbar } from '../components';

const HomeLayout = () => {
  return (
    <>
      <nav>
        <span className='text-4xl text-primary'>Comfy</span>
      </nav>
      <section className='align-element py-20'><Outlet />
      </section>
      <Outlet />
    </>
  );
};
export default HomeLayout;