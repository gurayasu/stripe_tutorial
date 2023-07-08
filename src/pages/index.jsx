import { useRouter } from "next/router";

export const Payment = () => {
  const { push } = useRouter();
  return (
    <>
      <div align="center">
        <h1>Stripe Test購入画面</h1>
        <button
          align="center"
          onClick={async () => {
            const response = await fetch("/api/checkout_api", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                customer_id: "", // ここに顧客IDを値に設定しましょう
                price_id: "", // ここに商品IDを値に設定しましょう
              }),
            }).then((data) => data.json());
            push(response.checkout_url);
          }}
        >
          商品購入ボタン
        </button>
      </div>
    </>
  );
};
export default Payment;
