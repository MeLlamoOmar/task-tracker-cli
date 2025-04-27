# TaskCLI

TaskCLI es una herramienta de línea de comandos (CLI) para gestionar tareas. Permite agregar, eliminar, actualizar y listar tareas con facilidad, además de categorizar su estado.

---

Este proyecto fue obtenido de [Roadmap.sh](https://roadmap.sh/projects/task-tracker)

---



## **Instalación**

1. Asegúrate de tener [Node.js](https://nodejs.org) instalado en tu sistema.
2. Clona este repositorio o descárgalo como archivo ZIP.
3. Instala las dependencias necesarias ejecutando:
   ```bash
   npm install
   npm run build
   npm i -g
   ```

---

## **Uso**

Ejecuta el programa desde la terminal utilizando el siguiente comando:

```bash
node task-cli <comando> [argumentos]
```

### **Comandos Disponibles**

#### **1. Agregar una nueva tarea**
Agrega una nueva tarea con una descripción.

```bash
node task-cli add "Descripción de la tarea"
```
- **Ejemplo**:
  ```bash
  node task-cli add "Terminar el proyecto de CLI"
  ```

#### **2. Eliminar una tarea**
Elimina una tarea existente utilizando su ID.

```bash
task-cli delete <id>
```
- **Ejemplo**:
  ```bash
  task-cli delete 3
  ```

#### **3. Actualizar una tarea**
Actualiza la descripción de una tarea específica.

```bash
task-cli update <id> "Nueva descripción"
```
- **Ejemplo**:
  ```bash
  task-cli update 1 "Revisar documentación del proyecto"
  ```

#### **4. Marcar el estado de una tarea**
Actualiza el estado de una tarea existente.

- **Marcar como completada**:
  ```bash
  task-cli mark done <id>
  ```
  - **Ejemplo**:
    ```bash
    task-cli mark done 2
    ```

- **Marcar como en progreso**:
  ```bash
  task-cli mark in-progress <id>
  ```
  - **Ejemplo**:
    ```bash
    task-cli mark in-progress 3
    ```

- **Marcar como pendiente**:
  ```bash
  task-cli mark todo <id>
  ```
  - **Ejemplo**:
    ```bash
    task-cli mark todo 4
    ```

#### **5. Listar todas las tareas**
Muestra todas las tareas existentes en el sistema.

```bash
task-cli list
```

#### **6. Listar tareas completadas**
Muestra todas las tareas que están marcadas como completadas (`done`).

```bash
node task-cli list done
```

#### **7. Listar tareas en progreso**
Muestra todas las tareas que están en progreso (`in-progress`).

```bash
node task-cli list in-progress
```

#### **8. Listar tareas pendientes**
Muestra todas las tareas pendientes (`todo`).

```bash
node task-cli list todo
```

---

## **Estados de las Tareas**

- **todo**: Tareas que aún no se han iniciado.
- **in-progress**: Tareas que están en proceso.
- **done**: Tareas completadas.

---

## **Contribuciones**

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos para contribuir:

1. Haz un fork de este repositorio.
2. Crea una nueva rama para tus cambios:
   ```bash
   git checkout -b feature/nueva-funcion
   ```
3. Realiza tus cambios y asegúrate de documentarlos adecuadamente.
4. Envía un pull request.

---

## **Licencia**

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

## **Autor**

Creado por **Omar Alexander Bencosme Tio**.

