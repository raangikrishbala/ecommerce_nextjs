import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="widget">
                <h4 className="widget-title">About</h4>
                <ul className="links">
                  <li><a href="#">Contact Us</a></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Stories</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">Corporate Information</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="widget">
                <h4 className="widget-title">Help</h4>
                <ul className="links">
                  <li><a href="#">Payments</a></li>
                  <li><a href="#">Shippings</a></li>
                  <li><a href="#">Cancelaation & Returns</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="widget">
                <h4 className="widget-title">Consumer Policy</h4>
                <ul className="links">
                  <li><a href="#">Cancelaation & Returns</a></li>
                  <li><Link href="/terms">Terms of Use</Link></li>
                  <li><a href="#">Security</a></li>
                  <li><Link href="/policy">Privacy</Link></li>
                  <li><a href="#">Sitemap</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="widget">
                <h4 className="widget-title">Contact Info</h4>
                <ul className="contact-info">
                  <li>
                    <span className="contact-info-label">Address:</span>123 Street Name, City, England
                  </li>
                  <li>
                    <span className="contact-info-label">Phone:</span>
                    <a href="tel:">(123) 456-7890</a>
                  </li>
                  <li>
                    <span className="contact-info-label">Email:</span>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                </ul>
                <div className="social-icons">
                  <a href="#" className="social-icon social-facebook icon-facebook" target="_blank" title="Facebook"></a>
                  <a href="#" className="social-icon social-twitter icon-twitter" target="_blank" title="Twitter"></a>
                  <a href="#" className="social-icon social-instagram icon-instagram" target="_blank" title="Instagram"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <div className="container d-sm-flex align-items-center">
            <div className="footer-left">
              <span className="footer-copyright">Copyrights @ 2025. All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
