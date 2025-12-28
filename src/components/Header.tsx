'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        {/* Header Top */}
        <div className="header-top bg-primary text-white">
          <div className="container">
            <div className="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
              <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                <a href="#">Links</a>
                <div className="header-menu">
                  <ul>
                    <li><Link href="/login">Log In</Link></li>
                    <li><a href="#">Cart</a></li>
                    <li><Link href="/seller">Become a Seller</Link></li>
                  </ul>
                </div>
              </div>

              <span className="separator"></span>

              <div className="header-dropdown">
                <a href="#"><i className=""></i>Help</a>
                <div className="header-menu">
                  <ul>
                    <li><a href="#"><i className="mr-2"></i>24x7 Customer Care</a></li>
                    <li><a href="#"><i className="mr-2"></i>Advertise</a></li>
                    <li><a href="#"><i className="mr-2"></i>Download App</a></li>
                  </ul>
                </div>
              </div>

              <span className="separator"></span>

              <div className="header-dropdown">
                <a href="#"><i className=""></i>Notifications</a>
                <div className="header-menu noti-header_menu">
                  <ul>
                    {[1, 2, 3, 4].map((item) => (
                      <li key={item}>
                        <div className="noti">
                          <h6>Order Delivered</h6>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          <p className="hour_span">7 hours ago</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Middle */}
        <div className="header-middle sticky-header">
          <div className="container">
            <div className="header-left">
              <button 
                className="mobile-menu-toggler" 
                type="button"
                onClick={() => setMobileMenuOpen(true)}
              >
                <i className="fas fa-bars"></i>
              </button>

              <Link href="/" className="logo w-100">
                <Image src="/assets/images/logo.png" alt="Logo" width={150} height={50} />
              </Link>

              <nav className="main-nav w-100">
                <ul className="menu">
                  <li className="active"><Link href="/">Home</Link></li>
                  <li><Link href="/marketplace">Marketplace</Link></li>
                  <li><Link href="/business">Business</Link></li>
                  <li><Link href="/sales">Sales</Link></li>
                  <li><Link href="/service">Services</Link></li>
                  <li><Link href="/event">Events</Link></li>
                  <li><Link href="/automotive">Automotive</Link></li>
                  <li><Link href="/onehubstore">Onehub Store</Link></li>
                </ul>
              </nav>
            </div>

            <div className="header-right">
              <div className="header-icon header-search header-search-inline header-search-category w-lg-max text-right mt-0">
                <form action="#" method="get">
                  <div className="header-search-wrapper">
                    <input
                      type="search"
                      className="form-control"
                      name="q"
                      placeholder="Search for Products, Brands and More"
                      required
                    />
                    <button className="btn icon-magnifier p-0" title="search" type="submit"></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="mobile-menu-container">
            <div className="mobile-menu-wrapper">
              <span className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
                <i className="fa fa-times"></i>
              </span>
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/marketplace">Marketplace</Link></li>
                  <li><Link href="/business">Business</Link></li>
                  <li><Link href="/sales">Sales</Link></li>
                  <li><Link href="/service">Services</Link></li>
                  <li><Link href="/event">Events</Link></li>
                  <li><Link href="/automotive">Automotive</Link></li>
                  <li><Link href="/onehubstore">Onehub Store</Link></li>
                </ul>

                <ul className="mobile-menu mt-2 mb-2">
                  <li>
                    <a href="#">Username</a>
                    <ul>
                      <li><Link href="/dashboard">My Profile</Link></li>
                      <li><Link href="/orders">Orders</Link></li>
                      <li><Link href="/wishlist">Wishlist (9)</Link></li>
                      <li><a href="#">Gift Cards</a></li>
                      <li><a href="#">Logout</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Cart</a></li>
                  <li><Link href="/seller">Become a Seller</Link></li>
                  <li>
                    <a href="#">Help</a>
                    <ul>
                      <li><a href="#">24x7 Customer Care</a></li>
                      <li><a href="#">Advertise</a></li>
                      <li><a href="#">Download App</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>

              <form className="search-wrapper mb-2" action="#">
                <input
                  type="text"
                  className="form-control mb-0"
                  placeholder="Search for Products, Brands and More"
                  required
                />
                <button className="btn icon-search text-white bg-transparent p-0" type="submit"></button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
