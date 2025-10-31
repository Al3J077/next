let nombre: string = "Daniel";
let edad: number = 30;
let activo: boolean = true;
let cualquiera: any = "texto o numero";
let desconocido: unknown = 123;

export default function Variables() {
    return (
        <ul className="space-y-1">
            <li>Nombre: {nombre}</li>
            <li>Edad: {edad}</li>
            <li>Activo: {activo ? "Sí" : "No"}</li>
            <li>Cualquiera: {cualquiera}</li>
            <li>Desconocido: {desconocido}</li>
        </ul>
    )