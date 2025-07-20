<div>
  <button class="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10">Open drawer</button>

  <div class="relative z-10" aria-labelledby="drawer-title" role="dialog" aria-modal="true">
  
      {/* Background backdrop, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0" */}
    
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

        <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            {/* <!--
                Slide-over panel, show/hide based on slide-over state.

                Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                From: "translate-x-full"
                To: "translate-x-0"
                Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                From: "translate-x-0"
                To: "translate-x-full"
            --> */}
            <div class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                    <h2 class="text-lg font-medium text-gray-900" id="drawer-title">Shopping cart</h2>
                    <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Close panel</span>
                        <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    </div>

                    <div class="mt-8">
                    <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                        <li class="flex py-6">
                            <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="size-full object-cover" />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                            <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                    <a href="#">Throwback Hip Bag</a>
                                </h3>
                                <p class="ml-4">$90.00</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">Salmon</p>
                            </div>
                            <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty 1</p>

                                <div class="flex">
                                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                            </div>
                            </div>
                        </li>
                        <li class="flex py-6">
                            <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="size-full object-cover" />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                            <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                    <a href="#">Medium Stuff Satchel</a>
                                </h3>
                                <p class="ml-4">$32.00</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">Blue</p>
                            </div>
                            <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty 1</p>

                                <div class="flex">
                                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                            </div>
                            </div>
                        </li>
                        <li class="flex py-6">
                            <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-03.jpg" alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls." class="size-full object-cover" />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                            <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                    <a href="#">Zip Tote Basket</a>
                                </h3>
                                <p class="ml-4">$140.00</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">White and black</p>
                            </div>
                            <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty 1</p>

                                <div class="flex">
                                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                            </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>

                
                </div>
            </div>
            </div>
      </div>
    </div>
  </div>
</div>
