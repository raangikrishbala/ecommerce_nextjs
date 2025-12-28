import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <div className="page-wrapper">
      <main className="main">
        <div className="container reset-password-container">
          <div className="login-card">
            <div className="row justify-content-center">
              {/* Left: Blue Panel */}
              <div className="col-sm-3 bg-primary">
                <div className="p-5">
                  <h4 className="text-white">Sign in or create account</h4>
                  <p className="text-white">
                    Get access to your Orders, Wishlist and Recommendations
                  </p>
                </div>
              </div>

              {/* Right: Login Form */}
              <div className="col-sm-5">
                <div className="container-fluid">
                  <div className="">
                    <div className="">
                      <div
                        className="feature-box border-top-primary"
                        style={{ marginBottom: 0 }}
                      >
                        <div className="feature-box-content">
                          <LoginForm />
                        </div>
                      </div>
                    </div>
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
