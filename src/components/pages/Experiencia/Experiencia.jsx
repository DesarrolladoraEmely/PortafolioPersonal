import './Experiencia.css'
export function Experiencia(){

    return(
        <>  
            <div className="fondo">

                <section className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>MI EXPERIENCIA</h2>
                            <hr />
                        </div>
                    </div>
                </section>

                <section className="container">
                    <div className="row">
                        <div className="col-6 text-center">
                            <h2>Lógica de Programación</h2>
                            <hr />
                            <p>Estructuras de Control: Condicionales (if), bucles (for, while), y estructuras de selección (switch). <br />
                            Tipos de Datos: Variables (números, cadenas, booleanos) y estructuras (listas, diccionarios) <br />
                            Manejo de Errores: Excepciones y depuración de código. Funciones: Definición, argumentos, valores de retorno, recursión.</p>
                            <div class="progress" role="progressbar">
                                <div class="progress-bar barra">10%</div>
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <h2>Base de Datos</h2>
                            <hr />
                            <p>Tipos:Relacionales (MySQL, PostgreSQL) usan tablas. <br />
                            SQL (MongoDB, Redis) usa documentos, clave-valor, grafos, etc. <br />
                            Modelo Relacional:Tablas, filas y columnas. <br />
                            Claves: Primaria (única), Foránea (referencia). <br />
                            Consultas SQL:SELECT, INSERT, UPDATE, DELETE.
                            Relaciones entre Tablas: Uno a muchos, muchos a muchos, uno a uno. <br />
                            Normalización: Organizar datos para evitar redundancia (1NF, 2NF, 3NF).
                            </p>
                            <div class="progress" role="progressbar">
                                <div class="progress-bar barra2">50%</div>
                            </div>
                        </div>
                        
                    </div>


                    <div className="row">
                        <div className="col-6 text-center  mt-5">
                            <h2>Maquetación HTML + CSS</h2>
                            <hr />
                            <p>
                                HTML la estructura de una página web usando etiquetas como header, section, p, img, a, entre otras. CSS aplica el estilo visual, controlando colores, tamaños, márgenes, fuentes y disposición del contenido. Se usan selectores (clase, id, etiquetas) para aplicar estilos, y herramientas como Flexbox, Grid y media queries para lograr diseños responsivos que se adaptan a diferentes pantallas. La maquetación efectiva combina HTML semántico con CSS limpio y organizado.</p>
                            <div class="progress" role="progressbar">
                                <div class="progress-bar barra3">80%</div>
                            </div>
                        </div>
                        <div className="col-6 text-center mt-5">
                            <h2>Programación JS</h2>
                            <hr />
                            <p>
                                JavaScript es un lenguaje de programación utilizado principalmente para hacer páginas web interactivas. Permite manipular el contenido de las páginas a través del DOM, trabajar con variables, realizar cálculos, y gestionar eventos del usuario. Sus estructuras básicas incluyen variables (let, const), operadores aritméticos y lógicos, y estructuras de control como if, for, y while. JavaScript también maneja funciones (declaradas de forma tradicional o con funciones flecha) y objetos/arrays para organizar datos. Es fundamental en el desarrollo web, desde la validación de formularios hasta la creación de servidores con Node.js.
                            </p>
                            <div class="progress" role="progressbar">
                                <div class="progress-bar barra4">50%</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-6 text-center mt-5">
                            <h2>Uso de GitHub</h2>
                            <hr />
                            <p>
                                GitHub es una plataforma de control de versiones basada en Git que permite a los desarrolladores almacenar, gestionar y colaborar en proyectos de software. Usando Git, los usuarios pueden realizar seguimientos de cambios en su código, crear ramas para experimentar sin afectar el proyecto principal, y fusionar esos cambios cuando estén listos. GitHub facilita la colaboración a través de pull requests, donde otros pueden revisar y aprobar cambios antes de integrarlos. También ofrece características como issues para rastrear errores, wikis para documentación y acciones para automatizar flujos de trabajo. Es esencial para proyectos de desarrollo colaborativos, permitiendo una gestión eficiente del código y un historial claro de modificaciones.

                            </p>
                            <div class="progress" role="progressbar">
                                <div class="progress-bar barra5">05%</div>
                            </div>
                        </div>
                        <div className="col-6 text-center mt-5">
                            <h2>React</h2>
                            <hr />
                            <p>
                                React es una biblioteca de JavaScript para construir interfaces de usuario, basada en componentes reutilizables. Los conceptos clave incluyen el estado (state) y las propiedades (props), el virtual DOM para mejorar el rendimiento, y el uso de hooks como `useState` y `useEffect` para manejar el estado y efectos secundarios. La gestión del estado global puede hacerse con Context API o Redux, y el enrutamiento se maneja con React Router. Además, se utiliza JSX para combinar HTML y JavaScript en los componentes. React es flexible y se puede integrar con otras tecnologías y librerías.
                            </p>
                            <div class="progress" role="progressbar">
                                <div class="progress-bar barra6">40%</div>
                            </div>
                        </div>
                    
                    </div>
                </section>

            </div>
            

        </>
    )
        
    
}