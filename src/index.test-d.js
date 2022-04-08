import { expectType, expectError } from 'tsd';
import { getPersons, personToString } from './index';
expectType(getPersons()[0].name);
expectType(getPersons()[0].age);
expectType(getPersons()[0].gender);
expectType(
    personToString({
        age: 18,
        gender: 'male',
        name: 'Иванов И.И.',
    }),
);
expectType(
    personToString({
        age: 18,
        gender: 'female',
        name: 'Иванов И.И.',
    }),
);
expectType(
    personToString({
        age: 18,
        gender: 'male',
        name: 'Иванов И.И.',
        company: 'Тензор',
    }),
);
expectType(
    personToString({
        age: 18,
        gender: 'female',
        name: 'Иванов И.И.',
        company: 'Тензор',
    }),
);
expectError(
    personToString({
        age: 18,
        gender: 'male',
        name: 'Иванов И.И.',
        company: 'Тензор',
        extraField: '1',
    }),
);
expectError(
    personToString({
        age: 18,
        gender: 'female',
        name: 'Иванов И.И.',
        company: 'Тензор',
        extraField: '1',
    }),
);
//# sourceMappingURL=index.test-d.js.map
