'use client';

import Breadcrumb from '@/components/Breadcrumb';
import DashboardSidebar from '@/components/DashboardSidebar';
import OrderCard from '@/components/OrderCard';
import { orders } from '@/data/ordersData';

export default function OrdersPage() {
  const breadcrumbItems = [
    { label: '', href: '/', icon: 'icon-home' },
    { label: 'My Orders' }
  ];

  const handleReviewClick = (orderId: string) => {
    console.log('Review clicked for order:', orderId);
    // Handle review logic here
  };

  return (
    <div className="page-wrapper">
      <main className="main about">
        <Breadcrumb items={breadcrumbItems} />

        <div className="about-section" id="dashboard-section">
          <div className="container">
            <div className="row">
              <DashboardSidebar 
                userName="Username"
                userImage="/assets/images/elements/testimonial/client1.png"
              />
              
              <div className="col-sm-9" style={{ padding: '0rem 2rem' }}>
                <div className="wishlist-title">
                  <h5 className="p-2">My ORDER</h5>
                </div>

                {orders.map((order) => (
                  <OrderCard
                    key={order.id}
                    image={order.image}
                    title={order.title}
                    color={order.color}
                    price={order.price}
                    deliveryDate={order.deliveryDate}
                    status={order.status}
                    onReviewClick={() => handleReviewClick(order.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
