# 06. Políticas de Grupo (Bloque F)

## 18. Creación de GPO
Se creó y vinculó el objeto de directiva de grupo `GPO-Ventas` en la Unidad Organizativa correspondiente.

![Creación del GPO](img_aranic/18. Creacion gp0 ventas.jpg)
![GPO vinculado en la OU](img_aranic/18.%20creacion%20lista.jpg)

## 19. Configuración de Restricciones
Se editó el GPO para aplicar una restricción de usuario que impide el acceso a herramientas de configuración.
* **Política:** "Prohibir el acceso a Configuración de PC y a Panel de control" configurada como **Habilitada**.

![Configuración de la política](img_aranic/19.%20prohibir%20acceso.jpg)

## 20. Aplicación y Verificación
Tras forzar la actualización de directivas en el cliente, se verificó el bloqueo del acceso al intentar abrir el Panel de Control.

![Restricción aplicada en el cliente](img_aranic/20.%20prohibicion%20cliente%20panel%20de%20control.jpg)