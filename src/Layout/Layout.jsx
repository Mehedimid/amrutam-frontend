import { Outlet } from 'react-router-dom';
import Navbar from '../common components/navbar/Navbar';

const Layout = () => {
  return (
    <div className='max-w-[1800px] mx-auto'>
        <div className='bg-secondary'><Navbar></Navbar></div>
        <div className='min-h-screen'> <Outlet></Outlet></div>
        <div>footer</div>
    </div>
  )
}

export default Layout