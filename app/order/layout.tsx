
//import ToastNotification from "@/components/ui/ToastNotification";

import OrderSidebar from "@/components/order/orderSidebar";
import OrderSummary from "@/components/order/OrderSummary";
import ToastNotification from "@/components/ui/ToastNotification";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {

    return (
        <>
            <div className="md:flex">
                <OrderSidebar></OrderSidebar>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
                    {children}
                </main>
                <OrderSummary></OrderSummary>

            </div>
            
            <ToastNotification></ToastNotification>

        </>
    )
}


