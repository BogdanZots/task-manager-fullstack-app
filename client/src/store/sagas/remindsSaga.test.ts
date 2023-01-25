import { call, put } from 'redux-saga/effects';
import { loadReminds } from './remindsSaga';
import RemindsService from '../../services/RemindsService';
import { loadRemindsError, loadRemindsSuccess } from '../actions/remindsAction';
import { cloneableGenerator } from '@redux-saga/testing-utils';
describe('reminds saga test', () => {
  const action = {
    type: 'LOAD_REMINDS_REQUEST',
    payload: { id: '6208c66f5541971525cd2d20' },
  };
  const fakeUrl = '/reminds?userId=6208c66f5541971525cd2d20';
  const fakeData = {
    data: [
      {
        description: 'test 2',
        id: '6208c66f5541971525cd2d20',
        title: 'test 1',
        __v: 0,
        _id: '620fcda1d1bb161e37c3ff48',
      },
      {
        description: 'test 2',
        id: '6208c66f5541971525cd2d20',
        title: 'test 1',
        __v: 0,
        _id: '620fcda1d1bb161e37c3ff48',
      },
    ],
  };
  //@ts-ignore
  const generator = cloneableGenerator(loadReminds)(action);

  let clone: any;
  beforeEach(() => {
    clone = generator.clone();
  });
  generator.next();
  it('should fetch reminds', () => {
    expect(clone.next(fakeData).value).toEqual(put(loadRemindsSuccess(fakeData.data))); // LOAD_REMINDS_SUCCESS
  });

  it('should throw new error', () => {
    const error = "TypeError: Cannot read properties of undefined (reading 'data')";
    const result = clone.throw(error).value;
    expect(result).toEqual(put(loadRemindsError(error))); // LOAD_REMINDS_ERROR
  });
});

export {};
