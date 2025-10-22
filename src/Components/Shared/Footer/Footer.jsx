import React from 'react';

const Footer = () => {
    return (
        <div className='border-t border-gray-200 mt-20'>
            <footer className="container mx-auto footer sm:footer-horizontal text-base-content p-10">
                <aside>

                    <p>
                        <img src="https://i.ibb.co.com/Mk3J0ckw/f3616df0-60c6-44ff-a7b2-1b5e3ee93173.png" className='w-40' alt="" />
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-[#2E4B45] text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by BD Calling Academy </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;