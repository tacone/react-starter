import routes from "../mainRoutes";
import html from "./mainPrerender.html";
import Prerenderer from "./../../config/Prerenderer";

export default class MainRenderer {
	constructor(options) {
		this.prerenderer = new Prerenderer(routes);
		this.html = html
			.replace("STYLE_URL", options.styleUrl)
			.replace("SCRIPT_URL", options.scriptUrl)
			.replace("COMMONS_URL", options.commonsUrl);
	}

	render(path, readItems, callback) {
		//var stores = createStoresForPrerender(storesDescriptions, readItems);
		var stores = {};
		this.prerenderer.getContent(path, stores, (err, content, data) => {
			if(err) return callback(err);
			var page = this.html
				.replace("DATA", JSON.stringify(data))
				.replace("CONTENT", content);
			callback(null, page);
		});
	}
}
