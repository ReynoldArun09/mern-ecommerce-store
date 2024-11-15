import CartButtons from "./cart-button";

export default function CartLineItems({ items }: any) {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div className="flex gap-4 space-y-3" key={item.product.name}>
          <div>
            <img
              src={item.product.image || "/product-placeholder.webp"}
              alt=""
              className="w-full h-12"
            />
          </div>
          <div>
            <h1>{item.product.name}</h1>
            <h2>{item.product.price}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
