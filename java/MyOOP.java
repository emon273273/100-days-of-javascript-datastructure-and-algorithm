 //TODO: OOP is faster and easier to execute
// OOP provides a clear structure for the programs
// OOP helps to keep the Java code DRY "Don't Repeat Yourself", and makes the code easier to maintain, modify and debug
// OOP makes it possible to create full reusable applications with less code and shorter development time
//     }

//TODO Java - What are Classes and Objects?
//So, a class is a template for objects, and an object is an instance of a class.

//When the individual objects are created, they inherit all the variables and methods from the class.


// TODO Static vs. Public
//You will often see Java programs that have either static or public attributes and methods.

// In the example above, we created a static method, which means that it can be accessed without creating an object of the class, unlike public, which can only be accessed by objects:

// Static variables and methods in Java provide several advantages, including memory efficiency, global access, object independence, performance, and code organization.

// LINK : https://www.freecodecamp.org/news/static-variables-in-java/


class MyOOP {

    int x=6;

    static void myStaticMethod() {
        System.out.println("Static methods can be called without creating objects");
      }
    
      // Public method
      public void myPublicMethod() {
        System.out.println("Public methods must be called by creating objects");
      }

    public static void main(String[] args) {
        System.out.println("Hello World!");

        MyOOP obj1=new  MyOOP();

        System.out.println(obj1.x);


//        TODO:  Using Multiple Classes
// You can also create an object of a class and access it in another class. This is often used for better organization of classes (one class has all the attributes and methods, while the other class holds the main() method (code to be executed)).
        SecondClass obj2=new SecondClass();
        System.out.println(obj2.b);



    //    obj2.b=300;

       System.out.println(obj2.b);

       obj1.myStaticMethod();

       obj1.myPublicMethod();
       MyOOP.myStaticMethod();
       

}
}