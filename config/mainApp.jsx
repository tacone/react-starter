import routes from "../app/mainRoutes";
import renderApplication from "./renderApplication";

renderApplication(routes, {}, {
	timeout: 600
});
