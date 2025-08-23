# Onclick() :

- it takes a function in it. so when we pass the `onClick(setColor("red"))` it actually takes refreence. that why instead of doing this.

- we do this `onClick(() => setColor("red"))` herre we pass the function.