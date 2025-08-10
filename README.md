# Tarea Dev Junior - Ruuf

## 🎯 Objetivo

El objetivo de este ejercicio es poder entender tus habilidades como programador/a, la forma en que planteas un problema, cómo los resuelves y finalmente cómo comunicas tu forma de razonar y resultados.

## 🛠️ Problema

El problema a resolver consiste en encontrar la máxima cantidad de rectángulos de dimensiones "a" y "b" (paneles solares) que caben dentro de un rectángulo de dimensiones "x" e "y" (techo).

## 🚀 Cómo Empezar - (Solución en TypeScript)
```bash
cd typescript
npm install
npm start
```

## ✅ Casos de Prueba

Tu solución debe pasar los siguientes casos de prueba:
- Paneles 1x2 y techo 2x4 ⇒ Caben 4
- Paneles 1x2 y techo 3x5 ⇒ Caben 7
- Paneles 2x2 y techo 1x10 ⇒ Caben 0

---

## 🧠💡 Mi Solución

Implementé mi solución de manera lógica, pensando en los pasos necesarios para organizar las figuras y entender el problema. El proceso que seguí fue el siguiente:

1. 🟩 **Contar cuántos paneles caben en posición vertical.**
2. 🟦 **Contar cuántos paneles caben en posición horizontal.**
3. 🟨 **Sumar la cantidad total de paneles.**

Para esto, primero calculé el **alto** y **ancho** ocupados por los paneles en una sola orientación. También obtuve la cantidad de paneles necesarios para cubrir esa área.

Luego, calculé el área sobrante del techo para formar una nueva figura, en la cual volví a calcular cuántos paneles cabían, pero **invirtiendo los lados X e Y** para cambiar la orientación.

Finalmente, sumé la cantidad de paneles obtenidos en ambas orientaciones. 

> 🎲 Probablemente exista una forma más eficiente o matemática de resolver el problema, pero opté por la opción que me resultó más lógica y rápida de implementar.

---

## 🤔 Supuestos y Decisiones

En una entrega anterior de esta misma prueba, también realicé una interfaz intuitiva y coherente con el diseño de Ruuf. Les invito a revisarla si lo desean.