import React from 'react';
import {shallow} from 'enzyme';
import App from "./App";

const app = shallow (<App/>);

it('renders correctly',()=>{
    expect(app).toMatchSnapshot()
})

it('ititialises the state with empty list of gifts',()=>{
    expect(app.state().gifts).toEqual([])
})

it('adds a new gift to state when clicking add gift button',()=>{
    app.find('.btn-add').simulate('click')
    expect(app.state().gifts).toEqual([{id: 1}])
})

it('adds new gift to the rendered list when add gift clicked',()=>{
    app.find('.btn-add').simulate('click')
    expect(app.find('.gift-list').children().length).toEqual(2)
})