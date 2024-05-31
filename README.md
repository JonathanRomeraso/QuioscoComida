# Quiosco Comida
- Obtiene información desde la base de datos y la despliega en pantalla usando prisma
- Panel para el área de comida 
- Pantalla con ordenes listas
- Administrador de productos
- Validaciones de cliente y servidor

## Historial de cambios
### Release 1
1. 26/05/2024 - Creación del proyecto y eliminación de estructura en los archivos no necesarios *14:32*
2. 26/05/2024 - Creación de los contenedores principales del proyecto (Order, components, new) *15:02*
3. 26/05/2024 - Creación base de datos en render, añadir la base de datos a la app y generar modelos de categoría y productos *15:25*
4. 26/05/2024 - Agregar datos de prueba en la base de datos con ayuda de prisma, modificando el package_json  *15:48*
5. 26/05/2024 - SideBar con imágenes de las categorías Obtenidas de la base de datos  *16:28*  -- **US-1**
6. 26/05/2024 - Product Card finalizado destacando la categoria en el slidebar  *17:12*  -- **US-2**
7. 26/05/2024 - Creación del detalle del pedido pudiendo eliminar y agregar desde esta parte, sin necesidad de presionar el botón del producto, además de establecer el mínimo y máximo a pedir  *17:51*  -- **US-3**
8. 26/05/2024 - Eliminar pedido y calcular el total de la orden  *20:00*  -- **US-4**
9. 26/05/2024 - Validaciones en el formulario en el lado usuario y en el lado del servidor, limpieza de datos y mensaje de error y confirmación  *21:00* -- **US-5**
### Release 2
10. 30/05/2024 - Creación de la vista de las ordenes hechas obteniendo de la base de datos los pedidos pendientes y mostrarlos en pantalla. *20:48* -- **US-6**
11. 30/05/2024 - Al marcar como completada la orden esta deja de aparecer en la pantalla de pedidos pendientes y en la base de datos se marca como completada y se agrega la fecha a la base de datos. *21:08* -- **US-7**