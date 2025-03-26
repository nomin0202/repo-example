// 1-----------------------------
class Person1 {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  // 2-----------------------------
  class Person2 {
    constructor(name) {
      this.name = name;
      this.greet = () => {
        console.log(`class dotroos ${this.name}`);
      };
    }
  }
  const person = new Person1("Alice");
  console.log(person.greet()); // 화살표 함수는 `this`를 유지함
  // greetFn;

  export default function Test() {
  return (
    <div style={{ color: 'white', marginLeft: "400px" }}>
      {/* {greetFn} */}
    </div>
  );
}
