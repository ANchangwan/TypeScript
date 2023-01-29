# TypeScript

## 📌 Types of TS(기본)

✅ 배열: 자료형[]
✅ 숫자: number
✅ 문자열: string
✅ 논리: boolean
✅ optional

```typescript
const player: {
  name: string;
  age?: number;
} = {
  name: "nico",
};
```

❌ player.age가 undefined일 가능성 알림

```typescript
if(player.age < 10) {
}

⭕ player.age가 undefined일 가능성 체크
if(player.age && player.age < 10) {
}

❗ ?를 :앞에 붙이면 optional
```

### ✅ Alias(별칭) 타입

```typescript
type Player = {
  name: string;
  age?: number;
};

const player: Player = {
  name: "nico",
};
```

⭐ 함수에서는 어떻게 쓸까

```typescript
type Player = {
  name: string;
  age?: number;
};

function playerMaker1(name: string): Player {
  return {
    name,
  };
}

const playerMaker2 = (name: string): Player => ({ name });

const nico = playerMaker1("nico");
nico.age = 12;
```

## 📌 Types of TS(part II)

### ✅ readonly 사용하기

```typescript
type Player = {
    readonly name:string
    age?:number
}

const playerMaker = (name: string): Player => ({name})

const nico = playerMaker("nico")
🚫 nico.name = "aa"
```

```typescript
const numbers: readonly number[] = [1, 2, 3, 4]
🚫 numbers.push(1)
❗ readonly가 있으면 최초 선언 후 수정 불가
    ⇒ immutability(불변성) 부여
        but, javascript에서는 그냥 배열

✅ Tuple
정해진 개수와 순서에 따라 배열 선언
const player: [string, number, boolean] = ["nico", 1, true]
❗ readonly도 사용가능 ⇒ readonly [...] 형태

✅ undefined, null, any
any: 아무 타입
undefined: 선언X 할당X
null: 선언O 할당X
```

## 📌 Types of TS(part II)

```typescript
✅ unknown
let a:unknown

if(typeof a === 'number'){
    let b = a + 1
}
if(typeof a === 'string'){
    let b = a.toUpperCase()
}
🚫 let b = a + 1

✅ void
아무것도 return하지 않는 함수에서 반환 자료형
function hello() {
    console.log('x')
}
const a = hello()
🚫 a.toUpperCase()

✅ never
함수가 return하지 않을 때
function hello():never {
    throw new Error("zzz")
    🚫return "a"
}

function temp(name:string|number):never {
    if(typeof name === "string"){
        name
    } else if(typeof name === "number"){
        name
    } else {
        name
    }
}

if 안에서는 string형의 name 반환
else if 안에서는 number형의 name 반환
else 안에서는 never형의 name 반환
⇒ 즉, 제대로 인자가 전달되었다면 else로 올 수 없음
```
