'use client';

import Image from 'next/image';

interface MenuItem {
  label: string;
  href: string;
  badge?: string;
}

interface MenuSection {
  title: string;
  icon: string;
  items: MenuItem[];
}

interface DashboardSidebarProps {
  userName?: string;
  userImage?: string;
}

export default function DashboardSidebar({ 
  userName = "Username",
  userImage = "/assets/images/elements/testimonial/client1.png"
}: DashboardSidebarProps) {
  const menuSections: MenuSection[] = [
    {
      title: "MY ORDERS",
      icon: "fa fa-shopping-bag",
      items: [
        { label: "Orders", href: "/orders" }
      ]
    },
    {
      title: "ACCOUNT SETTINGS",
      icon: "fa fa-user",
      items: [
        { label: "Profile Information", href: "/profile" },
        { label: "Manage Addresses", href: "/address" }
      ]
    },
    {
      title: "PAYMENTS",
      icon: "fa fa-credit-card",
      items: [
        { label: "Gift Cards", href: "#", badge: "₹0" },
        { label: "Saved UPI", href: "#" },
        { label: "Transaction History", href: "/transactions" }
      ]
    },
    {
      title: "My STUFF",
      icon: "fa fa-credit-card",
      items: [
        { label: "My Reviews & Ratings", href: "#" },
        { label: "All Notifications", href: "#" }
      ]
    },
    {
      title: "My Pages",
      icon: "fa fa-credit-card",
      items: [
        { label: "My Products", href: "/admin/products" },
        { label: "My Services", href: "/admin/services" },
        { label: "My Events", href: "/admin/events" },
        { label: "My Automotive", href: "/admin/automotive" }
      ]
    }
  ];

  return (
    <div className="sidebar mobile-sidebar2 col-sm-3 event-box order-summary sidebar-wrapperr">
      {/* User Profile Section */}
      <div className="contact-item d-flex align-items-center gap-3 p-3">
        <div className="icon mr-3">
          <img
            src={userImage}
            className="rounded-circle border border-danger"
            width="62"
            height="62"
            alt="client"
          />
        </div>
        <div>
          <small className="text-muted d-block">Hello</small>
          <strong>{userName}</strong>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="list-group list-group-flush">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <div className="px-3 border-bottom dashboard_list pt-3 pb-2 text-secondary font-weight-bold large">
              <i className={`${section.icon} mr-2 text-primary`}></i> {section.title}
            </div>
            {section.items.map((item, itemIndex) => (
              <a
                key={itemIndex}
                href={item.href}
                className={`list-group-item list-group-item-action border-0 ${
                  item.badge ? 'd-flex justify-content-between' : ''
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="text-success font-weight-bold">{item.badge}</span>
                )}
              </a>
            ))}
          </div>
        ))}

        {/* Logout Section */}
        <div className="px-3 dashboard_list border-bottom pt-3 pb-2 text-secondary font-weight-bold large">
          <i className="fa fa-credit-card mr-2 text-primary"></i> LOGOUT
        </div>
      </div>
    </div>
  );
}
