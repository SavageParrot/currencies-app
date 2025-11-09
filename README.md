
# currencies-app

Este proyecto está desarrollado con [Expo SDK 54](https://expo.dev) TypeScript y React Native. La estructura del proyecto es la siguiente:

```
├── app.json
├── package.json
├── tsconfig.json
├── api/                # Cliente GraphQL
│   └── queries/        # Consultas GraphQL
├── app/                # Pantallas y rutas principales
│   ├── (tabs)/         # Pantallas de pestañas
│   └── (countries)/    # Pantallas de países y monedas
├── assets/             # Imágenes y recursos
├── components/         # Componentes reutilizables
├── hooks/              # Custom hooks
├── types/              # Tipos TypeScript
├── utils/              # Funciones utilitarias
```


## ¿Cómo ejecutar la app?

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Crea el archivo de variables de entorno en la raíz del proyecto llamado `.env` y agrega la siguiente variable:

   ```env
   EXPO_PUBLIC_COUNTRIES_API=https://countries.trevorblades.com/
   ```

3. Inicia la app con el siguiente comando (esto limpia la caché y evita errores previos):

   ```bash
   npx expo start --clear
   ```

4. En la consola de Expo se mostrará un código QR. **Escanea ese código QR con la app móvil [Expo Go](https://expo.dev/go)** para simular la aplicación directamente en tu dispositivo móvil, sin necesidad de instalar emuladores como los de Android Studio.

> Recomendación: Usar Expo Go es la forma más rápida y sencilla de probar la app en tu teléfono.

## Manual de uso

### Búsqueda de países

- La búsqueda de países solo inicia cuando se ingresan dos o más caracteres.
- Se utiliza un debounce de 1 segundo para evitar disparar la consulta en cada letra digitada.
- La búsqueda es insensible a mayúsculas y minúsculas (incasesensitive), por lo que se mostrarán todos los resultados que coincidan, por ejemplo, al buscar "co" se mostrarán países como "Colombia" (que inicia con mayúscula) y otros que contengan "co" en su nombre como "Democratic Republic of Congo".

### Filtros

- Los filtros se aplican únicamente a los resultados obtenidos de la búsqueda.
- Si no hay resultados, los filtros no se habilitan.

## Librerías clave utilizadas

- **expo-video**: Reproducción de video en la app.
- **react-native-elements**: Componentes UI reutilizables y estilizados.
- **@apollo/client**: Cliente GraphQL para consumir APIs.
- **expo-router**: Navegación basada en archivos.
- **react-native-svg**: Soporte para gráficos vectoriales.
- **expo-image**: Optimización y manejo de imágenes.

Estas librerías permiten construir una app moderna, modular y fácil de mantener.

## Recursos útiles

- [Expo documentación](https://docs.expo.dev/)
- [Tutorial Expo](https://docs.expo.dev/tutorial/introduction/)


