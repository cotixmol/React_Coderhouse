<h1> Mascotas Molinengo - Proyecto React.js </h2>

<ul>
    <li><strong>Alumno:</strong> Constancio Molinengo</li>
    <li><strong>Comisión:</strong> 41590</li>
</ul>

<hr/>

<h2>Modo de uso y descargar</h2>
<ol>
    <li> Descargar repositorio a traves del comando "git clone /url" </li>
    <li> Ejercutar a traves de la Terminal, en el directorio mascotas-molinengo/ el comando "npm start"</li>
    <li> A traves del explorador ingresar al url: http://localhost:3000/</li>
</ol>

<h2>Caracteristicas Estructurales de la Aplicación</h2>
<h3>Componentes Principales</h3>
<p>Estos 3 componentes son la estructura principal del proyecto. Estan llamadas en el archivo principal App.js</p>
<br/>
<p><ins>NavBarPersonalizada:</ins> Barra de Navegación del Proyecto. Esta se encuentra fuera del ruteo.</p>
<p><ins>ItemListContainer:</ins> Contenedor del Catalogo principal.</p>
<p><ins>ItemDetailContainer:</ins> Contenedor del Detalle de cada articulo individual.</p>
<p><ins>CartContainer:</ins> Contenedor del Carrito de compras.</p>

<hr/>

<h3>Estructura Interna de "NavBarPersonalizada"</h3>
<p><ins>CartWidget</ins></p>

<h3>Estructura Interna de "ItemListContainer"</h3>
<p><ins>NavBarCategorias</ins></p>
<p><ins>ItemList</ins></p>
<p>---><ins>Item</ins></p>

<h3>Estructura Interna de "ItemDetailContainer"</h3>
<p><ins>ItemDetail</ins></p>
<p>---><ins>ItemCount</ins></p>

<h3>Estructura Interna de "CartContainer"</h3>
<p><ins>Cart</ins></p>
<p>---><ins>Form</ins></p>
