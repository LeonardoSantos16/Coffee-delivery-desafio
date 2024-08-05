import { Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home";
import { Pedido } from "./Page/Teste";
import { Success } from "./Page/Success";
import { Checkout } from "./Page/Checkout";
export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
           
            <Route path="/pedido" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
        </Routes>
    )

}