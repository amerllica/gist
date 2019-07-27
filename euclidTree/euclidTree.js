const euclidTree = (width = 100, height = 100) => {
    const body = document.body;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const branch = (size, angle) => {
        size < 10 ? ctx.strokeRect(0, 0, size, size) : ctx.fillRect(0, 0, size, size);
        if (size < 2) return;
        const v1 = size * Math.cos(angle * Math.PI / 180);
        ctx.save();
        ctx.translate(size, 0);
        ctx.rotate(angle * Math.PI / 180);
        ctx.translate(-v1, -v1);
        branch(v1, 15 + Math.random() * 60);
        ctx.restore();
        const v2 = size * Math.sin(angle * Math.PI / 180);
        ctx.save();
        ctx.rotate((angle - 90) * Math.PI / 180);
        ctx.translate(0, -v2);
        branch(v2, 15 + Math.random() * 60);
        ctx.restore();
    };
    const tree = () => {
        const width = canvas.width = canvas.offsetWidth;
        const height = canvas.height = canvas.offsetHeight;
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "#222";
        ctx.globalCompositeOperation = "xor";
        const size = Math.min(width, height) / 7;
        ctx.save();
        ctx.translate(0.5 * width - size * 0.5, height - size);
        branch(size, 15 + Math.random() * 60);
        ctx.restore();
    };
    window.addEventListener("resize", tree, false);
    ["resize", "click", "touchdown"].forEach(event => {
        document.addEventListener(event, tree, false);
    });
    tree();
};

euclidTree(800, 800);
