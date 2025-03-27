/* eslint-disable */
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
      console.log(`Hello, my name is ${this.name}`);
    };
  }
}
function Drink({ name }) {
  let part, caffeine, age;
  if (name == 'tea') {
    part = 'leaf';
    caffeine = "15-70 mg/cup"
    age = "4,000+ years"
  } else {
    part = 'bean';
    caffeine = "80–185 mg/cup"
    age = "1,000+ years"
  }
  return (
    <section style={{ color: 'white' }}>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
  const people2 = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];
  const listItems = people.map(person => <li>{person}</li>);
  const chemists = people2.filter(person => person.profession === 'chemist')
  //화살표 함수는 암시적으로 => 바로 뒤에 식을 반환하기 때문에 return 문이 필요하지 않습니다.
  //하지만 => 뒤에 { 중괄호가 오는 경우 return을 명시적으로 작성해야 합니다!

  // 🔥 객체 리터럴을 반환할 때 주의할 점
  // 화살표 함수에서 **표현식 본문(expression body)**을 사용할 때, 객체 리터럴을 반환하려면 소괄호(())로 감싸야 한다.

  //잘못된 코드 
  const getUser1 = () => ({ name: "Alice", age: 25 });
  // console.log(getUser1()); // undefined
  //올바른 코드
  const getUser2 = () => ({ name: "Alice", age: 25 });
  // console.log(getUser2()); // { name: 'Alice', age: 25 }


  const person = new Person1("Alice");
  console.log(person.greet()); // 화살표 함수는 `this`를 유지함
  // greetFn; 
  return (

    <div style={{ color: 'white', marginLeft: "400px" }}>
      <Drink name="tea" />
      <Drink name="coffee" />

      <ul>{listItems}</ul>;
      {/* {greetFn} */}
    </div>
  );
}
