function set_color_theme() {
    let root = document.documentElement;
    let color = document.getElementById('body').getAttribute("data-color")
    root.style.setProperty('--color', color)
    console.log('set colour theme to: ' + color)
}
