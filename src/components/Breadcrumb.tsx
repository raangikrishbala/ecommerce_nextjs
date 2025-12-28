interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
      <div className="container">
        <ol className="breadcrumb">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            if (isLast) {
              return (
                <li key={index} className="breadcrumb-item active" aria-current="page">
                  {item.label}
                </li>
              );
            }
            
            return (
              <li key={index} className="breadcrumb-item">
                <a href={item.href}>
                  {item.icon && <i className={item.icon}></i>}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
