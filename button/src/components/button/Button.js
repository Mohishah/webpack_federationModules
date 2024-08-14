class Button {
    render() {
        const button = document.createElement("button");
        button.innerHTML = "دکمه";
        button.classList.add("btn");
        button.classList.add("btn-dark");
        const body = document.querySelector("body");
        body.appendChild(button);

        button.onclick = () => {
            const p = document.createElement("p");
            p.innerHTML = "دکمه";
            p.classList.add("text-info");
            body.appendChild(p);

            import("ImageApp/ImageModule").then(module => {
                const Image = module.default;
                const image = new Image();
                image.render();
            })
        };
    }
}

export default Button;
