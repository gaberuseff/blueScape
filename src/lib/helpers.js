
export const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EGP",
        maximumFractionDigits: 0,
    }).format(price);
