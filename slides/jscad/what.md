# What is JSCAD ?

A Parametric 2d/3d code based modeling tool ! <!-- .element: class="fragment" -->

### Say what ?

### Code based: Draw by coding !

```javascript
    function main(){
        return cube()
    }
```

![alt text](./img/cube.png "cubeee")<!-- .element: class="fragment" -->

#### simply functions and modules

#### turn this
![alt text](./img/all-shapes-code.png "things")

#### into this

![alt text](./img/all-shapes.png "things")

### Parametric <!-- .slide: data-background-image="./img/holeradius1.png" -->

your design can change based on user provided parameters

(hole Radius is 1)

```javascript
   function makePart (holeRadius = 1) => {
        return  difference(
        cube({ size: [10, 2, 1], center: true }),
        sphere({ r: holeRadius, center: true })
        )
    }
```

### Parametric <!-- .slide: data-background-image="./img/holeradius3.png" -->

your design can change based on user provided parameters

(hole Radius is 3)

```javascript
   function makePart (holeRadius = 3) => {
        return  difference(
        cube({ size: [10, 2, 1], center: true }),
        sphere({ r: holeRadius, center: true })
        )
    }
```
