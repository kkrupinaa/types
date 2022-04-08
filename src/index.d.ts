/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */
type myGender = 'male' | 'female';
type objName = {
    name: string;
    age: number;
    gender: myGender;
};
type objNames = objName[];
export function getPersons(): objNames;

/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   - company- строка
 */
type emp = objName & { company: string };
type idT = objName | emp;
export function personToString(person: idT): string;
