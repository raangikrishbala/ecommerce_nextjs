interface OrderCardProps {
  image: string;
  title: string;
  color?: string;
  price: number;
  deliveryDate: string;
  status: string;
  onReviewClick?: () => void;
}

export default function OrderCard({
  image,
  title,
  color,
  price,
  deliveryDate,
  status,
  onReviewClick
}: OrderCardProps) {
  return (
    <div className="card order-card mb-3">
      <div className="card-body">
        <div className="row">
          {/* Product Image */}
          <div className="col-md-2 col-3">
            <img
              src={image}
              className="img-fluid rounded border"
              alt={title}
            />
          </div>

          {/* Product Details */}
          <div className="col-md-6 col-9">
            <h6 className="font-weight-bold mb-1">{title}</h6>
            {color && <p className="text-muted small mb-2">Color: {color}</p>}
          </div>

          {/* Price & Delivery */}
          <div className="col-md-4 text-md-right text-left mt-2 mt-md-0">
            <h6 className="font-weight-bold mb-2">₹{price}</h6>

            <p className="mb-1">
              <span className="status-dot"></span>
              <span className="font-weight-bold">Delivered on {deliveryDate}</span>
            </p>

            <p className="text-muted small mb-2">{status}</p>

            <a 
              href="#" 
              className="text-primary font-weight-bold small"
              onClick={(e) => {
                e.preventDefault();
                onReviewClick?.();
              }}
            >
              ★ Rate & Review Product
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
