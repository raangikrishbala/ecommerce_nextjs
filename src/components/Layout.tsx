import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
      <a id="scroll-top" href="#top" title="Top" role="button">
        <i className="icon-angle-up"></i>
      </a>
    </div>
  );
}
