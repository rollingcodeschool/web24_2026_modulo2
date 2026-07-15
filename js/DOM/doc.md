### 1. La estructura de Árbol

El concepto más importante es visualizar el documento HTML como un **conjunto anidado de cajas**.

- **El Árbol:** El DOM organiza los elementos en una estructura jerárquica llamada árbol, donde cada elemento es un **nodo**.
- **La Raíz:** El objeto global `document` es el punto de entrada, y `document.documentElement` representa la raíz (la etiqueta `<html>`).

### 2. Tipos de Nodos

No todo en el DOM es una etiqueta. Los nodos más comunes son:

- **Nodos de Elemento:** Representan las etiquetas HTML (código numérico 1).
- **Nodos de Texto:** Representan el contenido de texto dentro de las etiquetas (código numérico 3).
- **Nodos de Comentario:** Representan los comentarios en el código (código numérico 8).

### 3. Búsqueda y Selección de Elementos

Para manipular algo, primero debes encontrarlo. Los métodos básicos son:

- **`getElementById`:** Busca un único elemento por su atributo `id` único.
- **`getElementsByTagName`:** Devuelve una colección de todos los elementos con un nombre de etiqueta específico (como todos los `<p>`).
- **`querySelector` y `querySelectorAll`:** Permiten usar **selectores de CSS** para encontrar uno o varios elementos, lo cual es la forma más versátil y moderna.

### 4. Modificación del Documento

Una vez seleccionado un nodo, puedes cambiar su posición o contenido:

- **`appendChild` e `insertBefore`:** Para agregar nuevos hijos a un elemento.
- **`remove`:** Para eliminar un nodo del documento.
- **`replaceChild`:** Para sustituir un nodo existente por uno nuevo.

### 5. Creación de nuevos Nodos

Puedes generar contenido dinámicamente desde JavaScript:

- **`document.createElement`:** Crea una nueva etiqueta vacía (ej. un `<div>`).
- **`document.createTextNode`:** Crea un nodo que solo contiene texto.

### 6. Atributos y Estilos

El DOM permite leer y escribir metadatos y apariencia:

- **Atributos:** Puedes usar `getAttribute` y `setAttribute` para manejar datos personalizados (como atributos `data-*`).
- **Propiedad `style`:** Permite manipular el CSS directamente. Por ejemplo, `elemento.style.color = "red"`. Nota que propiedades con guiones como `font-family` se escriben en _camelCase_ en JavaScript: `style.fontFamily`.

### 7. Eventos (El puente a la interactividad)

Aunque técnicamente es un tema aparte, no se puede usar el DOM sin entender los **manejadores de eventos** (como `click` o `keydown`). Estos permiten que el código responda a las acciones del usuario en tiempo real.
