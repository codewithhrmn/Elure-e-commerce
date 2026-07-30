import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCartStore } from '../store/cartStore';
import { useState } from 'react';

export default function Checkout() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  const [shipping, setShipping] = useState(45);

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.0883;
  const total = subtotal + shipping + tax;

  return (
    <>
      <Navbar />

      <div className="bg-background text-on-background font-body-md min-h-screen">

        <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="font-label-caps text-label-caps text-secondary mb-2 block">
                CURATED SELECTION
              </span>

              <h2 className="font-display-lg text-headline-md md:text-display-lg">
                Checkout
              </h2>
            </div>

            <div className="flex items-center gap-4 font-label-caps text-label-caps tracking-widest">
              <span className="border-b border-primary pb-1">
                01 SHIPPING
              </span>

              <span className="text-outline">/</span>

              <span className="text-outline">
                02 PAYMENT
              </span>

              <span className="text-outline">/</span>

              <span className="text-outline">
                03 REVIEW
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">

            {/* SHIPPING FORM */}
            <div className="lg:col-span-7 space-y-12">

              <section>
                <h3 className="font-headline-md text-headline-md mb-8">
                  Shipping Information
                </h3>

                <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
                  onSubmit={(e) => e.preventDefault()}
                >

                  <div>
                    <label className="font-label-caps text-[10px] text-outline uppercase">
                      First Name
                    </label>

                    <input
                      type="text"
                      placeholder="ALEXANDER"
                      className="checkout-input font-body-md w-full border-b border-outline-variant bg-transparent py-3 outline-none focus:border-secondary"
                    />
                  </div>

                  <div>
                    <label className="font-label-caps text-[10px] text-outline uppercase">
                      Last Name
                    </label>

                    <input
                      type="text"
                      placeholder="VAUGHAN"
                      className="checkout-input font-body-md w-full border-b border-outline-variant bg-transparent py-3 outline-none focus:border-secondary"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="font-label-caps text-[10px] text-outline uppercase">
                      Address Line 1
                    </label>

                    <input
                      type="text"
                      placeholder="24 BOND STREET, NO. 4A"
                      className="checkout-input font-body-md w-full border-b border-outline-variant bg-transparent py-3 outline-none focus:border-secondary"
                    />
                  </div>

                  <div>
                    <label className="font-label-caps text-[10px] text-outline uppercase">
                      City
                    </label>

                    <input
                      type="text"
                      placeholder="NEW YORK"
                      className="checkout-input font-body-md w-full border-b border-outline-variant bg-transparent py-3 outline-none focus:border-secondary"
                    />
                  </div>

                  <div>
                    <label className="font-label-caps text-[10px] text-outline uppercase">
                      Postal Code
                    </label>

                    <input
                      type="text"
                      placeholder="10012"
                      className="checkout-input font-body-md w-full border-b border-outline-variant bg-transparent py-3 outline-none focus:border-secondary"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="font-label-caps text-[10px] text-outline uppercase">
                      Contact Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+1 (212) 555-0198"
                      className="checkout-input font-body-md w-full border-b border-outline-variant bg-transparent py-3 outline-none focus:border-secondary"
                    />
                  </div>

                </form>
              </section>

              {/* DELIVERY METHOD */}
              <section>
                <h3 className="font-headline-md text-headline-md mb-8">
                  Delivery Method
                </h3>

                <div className="space-y-4">

                  <label className="flex items-center justify-between p-6 border border-primary cursor-pointer hover:bg-surface-container-low transition-colors">

                    <div className="flex items-center gap-4">

                      <input
                        type="radio"
                        name="shipping"
                        checked={shipping === 45}
                        onChange={() => setShipping(45)}
                        className="w-4 h-4"
                      />

                      <div>
                        <p className="font-label-caps text-label-caps">
                          WHITE GLOVE DELIVERY
                        </p>

                        <p className="text-[11px] text-outline mt-1 italic">
                          Same day delivery with signature assembly
                        </p>
                      </div>

                    </div>

                    <span className="font-body-md">
                      $45.00
                    </span>

                  </label>


                  <label className="flex items-center justify-between p-6 border border-secondary/20 cursor-pointer hover:border-primary transition-colors">

                    <div className="flex items-center gap-4">

                      <input
                        type="radio"
                        name="shipping"
                        checked={shipping === 0}
                        onChange={() => setShipping(0)}
                        className="w-4 h-4"
                      />

                      <div>
                        <p className="font-label-caps text-label-caps">
                          EXPRESS CURATION
                        </p>

                        <p className="text-[11px] text-outline mt-1 italic">
                          2-3 Business Days
                        </p>
                      </div>

                    </div>

                    <span className="font-body-md">
                      COMPLIMENTARY
                    </span>

                  </label>

                </div>
              </section>

            </div>


            {/* ORDER SUMMARY */}
            <aside className="lg:col-span-5 lg:pl-12 lg:border-l border-secondary/20">

              <div className="sticky top-32 space-y-10">

                <div>

                  <h3 className="font-headline-md text-headline-md mb-8">
                    Your Curation ({items.length})
                  </h3>

                  {items.length === 0 ? (

                    <div className="py-10 text-center border border-outline-variant/30">

                      <p className="font-body-md text-on-surface-variant mb-4">
                        Your bag is currently empty.
                      </p>

                      <a
                        href="/collection"
                        className="font-label-caps text-secondary underline"
                      >
                        CONTINUE SHOPPING
                      </a>

                    </div>

                  ) : (

                    <div className="divide-y divide-secondary/10">

                      {items.map((item) => (

                        <div
                          key={`${item.id}-${item.size}`}
                          className="py-6 flex gap-6 group"
                        >

                          <div className="w-24 h-32 bg-surface-container overflow-hidden">

                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                          </div>


                          <div className="flex-1 flex flex-col justify-between py-1">

                            <div>

                              <h4 className="font-label-caps text-label-caps text-primary">
                                {item.name}
                              </h4>

                              <p className="text-[11px] text-outline mt-1">
                                SIZE: {item.size || 'ONE SIZE'}
                              </p>

                              <p className="text-[11px] text-outline mt-1">
                                QUANTITY: {item.quantity}
                              </p>

                            </div>


                            <div className="flex justify-between items-end">

                              <button
                                onClick={() =>
                                  removeItem(item.id, item.size)
                                }
                                className="text-sm font-label-caps underline decoration-secondary/30 cursor-pointer hover:text-secondary"
                              >
                                REMOVE
                              </button>

                              <span className="font-body-md">
                                ${(item.price * item.quantity).toLocaleString(
                                  'en-US',
                                  {
                                    minimumFractionDigits: 2,
                                  }
                                )}
                              </span>

                            </div>

                          </div>

                        </div>

                      ))}

                    </div>

                  )}

                </div>


                {/* TOTALS */}

                <div className="bg-surface-container-low p-8 space-y-4">

                  <div className="flex justify-between font-label-caps text-[11px] text-outline">
                    <span>SUBTOTAL</span>

                    <span>
                      ${subtotal.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>


                  <div className="flex justify-between font-label-caps text-[11px] text-outline">

                    <span>SHIPPING</span>

                    <span>
                      {shipping === 0
                        ? 'COMPLIMENTARY'
                        : `$${shipping.toFixed(2)}`}
                    </span>

                  </div>


                  <div className="flex justify-between font-label-caps text-[11px] text-outline">

                    <span>TAXES</span>

                    <span>
                      ${tax.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                      })}
                    </span>

                  </div>


                  <div className="pt-4 border-t border-secondary/20 flex justify-between items-baseline">

                    <span className="font-label-caps text-label-caps">
                      TOTAL
                    </span>

                    <span className="font-headline-md text-headline-md">
                      ${total.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                      })}
                    </span>

                  </div>

                </div>


                <button
                  disabled={items.length === 0}
                  className="w-full bg-secondary text-on-secondary font-label-caps py-6 tracking-[0.25em] transition-all duration-500 hover:bg-primary active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  COMPLETE PURCHASE
                </button>


                <div className="flex items-center justify-center gap-2 text-outline">

                  <span className="material-symbols-outlined text-[16px]">
                    lock
                  </span>

                  <span className="font-label-caps text-[10px]">
                    SECURED BY ELURE AI ENCRYPTION
                  </span>

                </div>

              </div>

            </aside>

          </div>

        </main>

      </div>

      <Footer />
    </>
  );
}