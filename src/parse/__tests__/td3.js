'use strict';

const parse = require('../parse');

describe('parse TD3', () => {
  it('Utopia example', function () {
    const MRZ = [
      'P<UTOERIKSSON<<ANNA<MARIA<<<<<<<<<<<<<<<<<<<',
      'L898902C36UTO7408122F1204159ZE184226B<<<<<10'
    ];

    const result = parse(MRZ);
    const errors = result.annotations.filter((a) => !a.valid);
    expect(result.fields).toEqual({
      documentType: 'passport',
      firstname: 'ANNA MARIA',
      lastname: 'ERIKSSON',
      documentNumber: 'L898902C3',
      documentNumberCheckDigit: '6',
      nationality: null,
      gender: 'female',
      expirationDate: '15.04.12',
      expirationDateCheckDigit: '9',
      personalNumber: 'ZE184226B',
      personalNumberCheckDigit: '1',
      birthDate: '12.08.74',
      birthDateCheckDigit: '2',
      issuingCountry: null,
      globalCheckDigit: '0'
    });

    expect(errors).toHaveLength(2);
    expect(result.valid).toEqual(false);
  });
});