
export default{
// script llenado dinamico
    tarjetas: [
        {
            title:"Hunters",
            href: `../images/hunters.png`
        },
        {
            title:"Cafeteria Hunters",
            href: `../images/Interior-cafeteria-pasteleria-Ofelia-Bakery_1731437050_168755568_1200x675.jpg`
        },
        {
            title:"8vo",
            href: `../images/cafeteria 8vo.jpg`
        },
        {
            title:"Baños",
            href: `../images/aseo.png`
        },
    ],

    showServicios(){
        let plantilla = "";
        this.tarjetas.forEach((val,id) => {
            plantilla += `
            <div class="tarjetas">
                <p>${val.title}</p>
                <img src="${val.href}" alt="">
                <button class = "cta" >Ver Datos</button>
            </div>
            `
        document.querySelector("#contenedor-tarjetas").insertAdjacentHTML("beforeend", plantilla)
        });
    }
// script accordion
}
