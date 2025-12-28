import Breadcrumb from '@/components/Breadcrumb';
import DashboardSidebar from '@/components/DashboardSidebar';

export default function DashboardPage() {
  const breadcrumbItems = [
    { label: '', href: '/', icon: 'icon-home' },
    { label: 'Dashboard' }
  ];

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
                  <h5 className="p-2">Dashboard</h5>
                </div>

                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-6 mt-5">
                    <img
                      src="/assets/images/dummy.jpg"
                      className="img-fluid"
                      style={{ width: '100%' }}
                      alt="Dashboard"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
