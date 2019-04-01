# Coincidix Kata

### Problem description

Solve Coincidix game

## Acceptance criteria

## Starting point and constraints

### Objective


```
-- piece 1--
| |x|x|
|x|o| |
-- piece 2--
|x| | |
|o|x|x|
-- piece 3--
|x|o| |
| |x|o|
-- piece 4--
|x|o|x|
|x| | |
-- piece 5--
|x|x|x|
| |o| |
-- piece 6--
| |x| |
|x|x|o|
-- piece 7--
|x|x|x|
|o| | |
-- piece 8--
|o|x| |
| |x|x|
-- piece 9--
|x|x|o|
|x| | |
-- case 1 --
|x|x|x|x|o|x|
|o|x|o|x|x|o|
|x|x|x|o|x|x|
|x|o|x|x|x|o|
|x|x|o|x|x|x|
|o|x|x|x|x|o|
-- case 2 --
|o|x|x|o|x|x|
|x|x|x|x|o|x|
|x|x|x|o|x|x|
|o|o|x|x|o|x|
|x|o|x|o|x|x|
|x|x|x|x|o|x|
-- case 3 --
|x|x|x|x|x|x|
|o|x|o|x|o|x|
|x|o|x|x|x|x|
|o|x|o|x|x|o|
|x|x|x|o|x|x|
|x|o|x|x|o|x|
-- case 4 --
|x|o|x|o|x|x|
|x|x|x|x|o|x|
|o|x|o|x|x|o|
|x|o|x|o|x|x|
|x|x|x|x|x|o|
|x|x|o|x|x|x|
-- case 5 --
|x|x|x|o|x|x|
|x|x|o|x|o|x|
|x|o|x|o|x|o|
|o|x|x|x|x|x|
|x|x|o|x|x|x|
|o|x|x|x|o|x|
-- case 6 --
|x|x|o|x|x|x|
|o|x|x|o|x|o|
|x|o|x|x|o|x|
|x|x|x|o|x|x|
|x|o|x|x|x|x|
|o|x|x|x|x|o|
-- case 7 --
|x|x|x|x|x|x|
|o|x|o|x|x|x|
|x|o|x|o|x|o|
|x|x|x|o|x|x|
|x|x|o|x|o|x|
|o|x|x|x|x|o|
-- case 8 --
|o|x|x|x|o|x|
|x|o|x|o|x|x|
|x|x|o|x|x|x|
|x|o|x|o|x|o|
|x|x|x|x|x|x|
|o|x|x|x|x|o|
-- case 9 --
|o|x|o|x|o|x|
|x|o|x|o|x|x|
|x|x|x|x|x|o|
|o|x|x|x|o|x|
|x|o|x|x|x|x|
|x|x|x|x|o|x|
-- case 10 --
|o|x|x|o|x|x|
|x|x|x|x|x|x|
|x|x|o|x|o|x|
|x|o|x|o|x|o|
|x|x|x|x|x|x|
|o|x|o|x|o|x|
-- case 11 --
|x|o|x|x|o|x|
|o|x|x|o|x|x|
|x|x|o|x|x|o|
|o|x|x|x|o|x|
|x|x|x|x|x|x|
|o|x|x|x|o|x|
-- case 12 --
|x|x|x|x|x|x|
|o|x|o|x|o|x|
|x|o|x|o|x|o|
|x|o|x|x|o|x|
|x|x|o|x|x|x|
|x|x|x|x|o|x|
-- case 13 --
|x|x|x|x|x|x|
|o|o|x|x|o|x|
|x|o|x|x|o|o|
|x|x|x|x|x|x|
|o|x|x|o|x|x|
|x|x|o|x|o|x|
-- case 14 --
|x|x|o|o|x|x|
|x|o|x|x|o|x|
|x|x|x|x|x|x|
|x|o|x|o|x|x|
|x|x|x|x|o|x|
|o|x|o|x|x|o|
-- case 15 --
|x|x|x|o|x|x|
|o|x|o|x|x|o|
|x|o|x|x|o|x|
|x|x|x|o|x|o|
|x|x|o|x|x|x|
|o|x|x|x|x|x|
-- case 16 --
|x|x|x|x|x|x|
|x|o|x|o|x|o|
|o|x|o|x|x|x|
|o|x|x|o|x|x|
|x|x|x|x|o|x|
|x|o|x|x|x|o|
-- case 17 --
|o|x|x|o|x|x|
|x|o|x|x|o|x|
|x|x|x|o|x|x|
|o|x|x|x|o|x|
|x|o|x|o|x|o|
|x|x|x|x|x|x|
-- case 18 --
|x|o|o|x|o|x|
|x|x|x|x|x|x|
|x|x|x|o|x|x|
|o|x|x|x|x|o|
|x|o|x|x|o|x|
|o|x|x|x|x|o|
-- case 19 --
|x|o|o|x|o|x|
|x|x|x|x|x|x|
|x|x|x|o|x|x|
|o|x|x|x|x|o|
|x|o|x|x|o|x|
|o|x|x|x|x|o|
-- case 20 --
|x|o|x|x|o|x|
|o|x|o|x|x|o|
|x|x|x|o|x|x|
|x|o|x|x|x|x|
|x|x|x|x|o|x|
|o|x|x|x|x|o|
-- case 21 --
|x|x|x|o|x|x|
|x|o|x|x|x|o|
|o|x|x|x|o|x|
|x|x|o|o|x|x|
|x|o|x|x|x|x|
|o|x|x|x|o|x|
-- case 22 --
|x|x|x|x|x|x|
|o|o|x|o|o|x|
|x|x|o|x|x|o|
|x|x|x|x|x|x|
|x|o|x|x|o|o|
|o|x|x|x|x|x|
-- case 23 --
|o|x|x|x|o|x|
|x|x|x|o|x|x|
|o|x|o|x|x|o|
|x|o|x|x|x|x|
|x|x|x|o|x|x|
|x|o|x|x|x|o|
-- case 24 --
|o|x|x|o|x|x|
|x|x|o|x|o|x|
|x|x|x|x|o|x|
|x|x|x|o|x|x|
|x|x|o|x|o|x|
|x|o|x|o|x|x|
-- case 25 --
|x|x|x|x|o|x|
|x|x|x|o|x|x|
|o|x|o|x|o|x|
|x|x|x|o|x|o|
|o|x|x|x|x|x|
|x|x|o|x|x|o|
-- case 26 --
|o|x|x|x|x|x|
|x|x|o|x|o|x|
|x|o|x|x|x|x|
|x|x|x|o|x|o|
|x|x|o|x|o|x|
|x|o|x|o|x|x|
-- case 27 --
|x|o|x|o|x|x|
|x|x|x|x|x|x|
|o|x|o|o|x|o|
|x|o|x|x|o|x|
|o|x|x|x|x|x|
|x|x|x|x|x|o|
-- case 28 --
|o|x|x|x|o|x|
|x|x|o|o|x|x|
|x|x|o|x|o|x|
|x|x|o|x|x|x|
|x|x|x|o|x|o|
|o|x|x|x|x|x|
-- case 29 --
|o|x|o|x|o|x|
|x|x|x|o|x|x|
|x|o|x|x|o|x|
|x|x|o|x|x|x|
|x|x|x|x|x|x|
|o|x|x|o|x|o|
-- case 30 --
|o|x|x|x|x|x|
|x|o|x|x|o|x|
|o|x|x|x|x|o|
|x|o|x|x|o|x|
|x|x|o|x|x|x|
|x|x|o|x|x|o|
-- case 31 --
|x|x|x|x|x|x|
|o|x|o|o|x|o|
|x|o|x|x|o|x|
|x|x|x|x|x|x|
|x|x|o|o|x|x|
|o|x|x|x|x|o|
-- case 32 --
|o|x|x|x|x|x|
|x|o|x|o|o|x|
|x|x|x|x|x|x|
|x|x|o|o|x|x|
|o|x|o|x|x|x|
|x|x|x|o|x|o|
-- case 33 --
|x|o|x|x|x|x|
|x|x|x|x|o|x|
|o|x|x|x|x|o|
|x|x|o|x|o|x|
|x|o|x|x|x|x|
|o|x|o|x|o|x|
-- case 34 --
|x|x|x|x|x|x|
|x|x|o|o|x|x|
|o|x|x|x|o|x|
|o|o|x|x|o|o|
|x|x|o|o|x|x|
|x|x|x|x|x|x|
-- case 35 --
|x|o|x|o|x|x|
|x|x|o|x|o|x|
|x|o|x|o|x|x|
|x|x|x|x|x|x|
|x|x|o|o|x|x|
|o|x|x|x|x|o|
-- case 36 --
|x|x|o|o|x|x|
|x|o|x|x|x|x|
|o|x|o|x|x|o|
|x|x|x|o|x|x|
|x|x|o|x|x|o|
|o|x|x|x|x|x|
-- case 37 --
|x|o|x|x|x|x|
|x|x|o|x|o|x|
|o|x|x|o|x|x|
|x|o|x|x|x|x|
|x|x|o|x|o|x|
|o|x|x|x|x|o|

-- case 38 --

|x|x|x|x|x|x|
|x|x|o|o|x|x|
|o|o|x|x|o|o|
|x|x|o|x|x|x|
|x|x|x|x|x|o|
|o|x|x|x|o|x|
```

---

### Credits

Christophe Taret

### Useful link:

- https://www.bcd-jeux.fr/2764-thickbox_default/coincidix-master-jeandel.jpg
