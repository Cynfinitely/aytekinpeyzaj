import { useEffect, useState, Fragment, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";

import { AppDispatch, RootState } from "../redux/store";
import { getTotals, removeProduct } from "../redux/features/cartSlice";

const Cart = () => {
  const CartProducts = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getTotals(CartProducts));
  }, [CartProducts, dispatch]);

  const handleCart = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <nav>
      <div>
        <ul className="flex flex-col  m-2 border-bottom ">
          <div onClick={handleCart} className="flex  ">
            <div className="relative py-2">
              <div className="t-0 absolute left-3">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                  {CartProducts.cartProducts.length}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 2 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="file: mt-4 h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
        </ul>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-black">
                            Alışveriş Sepeti
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                              aria-label="Close panel"
                            >
                              <span className="sr-only">Close panel</span>
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {CartProducts.cartProducts.map((product: any) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.image}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a>{product.name}</a>
                                        </h3>
                                        <p className="ml-4">
                                          {product.price * product.cartQuantity}
                                          TL
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Adet {product.cartQuantity}
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                          onClick={() =>
                                            dispatch(removeProduct(product))
                                          }
                                          aria-label="Remove product"
                                        >
                                          Ürünü Kaldır
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Toplam</p>
                          <p>{CartProducts.cartTotalAmount} TL</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Kargo Bedeli Fiyata Yansıtılacaktır.
                        </p>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="mybtn2 flex items-center justify-center rounded-md border border-transparent  px-6 py-3 text-base font-medium text-black shadow-sm hover:opacity-75"
                          >
                            Ödemeye Git
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            veya <br />
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                              aria-label="Continue shopping"
                            >
                              Alışverişe Devam Et
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </nav>
  );
};

export default Cart;