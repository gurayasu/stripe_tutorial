import { NextRouter, useRouter } from "next/router";
import React, { FC } from "react";

interface CheckoutApiResponse {
  checkout_url: string;
}

export const Payment: FC = () => {
  const { push }: NextRouter = useRouter();
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Stripe Test購入画面</h1>
        <button
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          onClick={async () => {
            const response: CheckoutApiResponse = await fetch(
              "/api/checkout_api",
              {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  customer_id: "", // ここに顧客IDを値に設定しましょう
                  price_id: "", // ここに商品IDを値に設定しましょう
                }),
              }
            ).then((data) => data.json());
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
