import App from "../App"
import ProductAll from "../Pages/ProductAll/productAll"

let routes = [
    {
        path:"/",
        element:<ProductAll/>
    },
    {
        path:"/App",
        element:<App/>
    },
]

export default routes