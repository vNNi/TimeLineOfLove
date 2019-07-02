import React from 'react';
import Date from './index';
import renderer from 'react-test-renderer';
import {img} from '../../__mock__/fileMock';
it('date renders correctly without image', () => {
    const tree = renderer.create(<Date title='teste' desc='teste2'/>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('date renders correctly with all props',() => {
    const tree = renderer.create(<Date title='teste' desc='teste2' img={img}/>).toJSON();
    expect(tree).toMatchSnapshot();
})