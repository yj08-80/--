// 문제 1: 1부터 10까지 출력하기
// for 반복문을 사용하여 1부터 10까지의 숫자를 콘솔에 순서대로 출력하는 프로그램을 작성하시오.
for( let count = 1 ; count <= 10 ; count++ ){
    console.log( count );
}

// 문제 2: 배열의 모든 요소 출력하기
// 다음과 같은 과일 배열이 있습니다. for 반복문을 사용하여 배열의 모든 요소를 하나씩 콘솔에 출력하시오.
// let fruits = ['사과', '바나나', '포도', '딸기'];
let fruits = ['사과', '바나나', '포도', '딸기'];
for(let num = 0 ; num <= fruits.length-1 ; num++ ){
    console.log( fruits [num] );
}

// 문제 3: 배열 역순으로 출력하기
// 주어진 배열을 for 반복문을 사용하여 역순으로 (마지막 요소부터 첫 요소 순서로) 출력하는 프로그램을 작성하시오.
// let numbers = [1, 2, 3, 4, 5];
// 출력 예시: 5 4 3 2 1
let numbers = [1, 2, 3, 4, 5];
for( let num1 = numbers.legnth-1 ; num1 >= 0 ; num1-- ){
    console.log( numbers[num1] );
}

// 문제 4: 1부터 50까지의 합계 구하기
// for 반복문을 사용하여 1부터 50까지 모든 정수의 합을 구하여 콘솔에 출력하시오.
let sum = 0;
for( let number = 1 ; number <= 50 ; number++ ){
    sum += number
} 
console.log(sum)
// 문제 5: 짝수만 출력하기
// for 반복문과 if 조건문을 사용하여, 1부터 20까지의 숫자 중 짝수만 콘솔에 출력하시오.
for( let num2 = 1 ; num2 <= 20 ; num2++ ){
    if( num2%2==0 ){
        console.log(num2);
    }
}