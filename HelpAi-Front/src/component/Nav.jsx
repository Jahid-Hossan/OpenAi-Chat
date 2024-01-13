import { FaSearch } from 'react-icons/fa';

const Nav = () => {
    return (
        <div className="flex py-3 bg-slate-900 w-full justify-between items-center">
            <div className=""></div>
            <div className='relative'>
                <input type="text" placeholder="Search..." className="rounded-full border-gray-400 border-2 bg-transparent py-2 px-3 outline-none text-white" />
                <FaSearch className='text-gray-400 absolute top-3.5 right-4 cursor-pointer' />
            </div>
            <div className='text-gray-400 flex items-center'>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <div >
                    <ul className="menu menu-horizontal px-1 py-1">
                        <li>
                            <details className='py-0'>
                                <summary className='py-0'>
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='rounded-full' />
                                    </div>
                                </summary>
                                <ul className="  absolute right-1">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Nav;