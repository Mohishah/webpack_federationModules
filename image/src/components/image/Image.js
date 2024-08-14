import $ from "jquery";
import webpackImage from "./webpack_image.png";

class Image {
    render() {
        const img = $("<img />", {
            alt: "webpackImage",
            src: webpackImage,
            width: 450,
        });
        const body = $("body");
        body.append(img);
    }
}

export default Image;
