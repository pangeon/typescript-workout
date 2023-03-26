/**
 * 1. This code snippet defines a new type **Constructable**,
 * which is the type of constructor for classes. In short, the **Constructable** type
 * represents a class that can be used as a constructor to create new objects.
 *
 * 2. The line **new(...args: any[]):{};** says **Constructable** is a constructor function,
 * which takes any number of arguments and returns an object of type **{} (an empty object)**.
 *
 * For example, if we have a class named **Person**, we can use the type **Constructable**
 * in the following way:
 *
 * ```ts
 * class Person {
 *   constructor(name: string, age: number) {
 *     // ...
 *   }
 * }
 *
 * const ConstructablePerson: Constructable = Person;
 * const person = new ConstructablePerson('John', 30);
 * ```
 *
 * In the code above, we create an instance of the **Person** class, but
 * instead of using the **Person** class constructor directly, we create a new type
 * **Constructable** and assign it the class **Person**. Then we can
 * use the new type **Constructable** as constructor to create
 * a new instance of the **Person** class.
 */

export type Constructable = {
    new(...args: any[]):{};
}