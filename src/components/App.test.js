import React from 'react';
import {shallow} from 'enzyme';
import App from "./App";

const app = shallow (<App/>);

describe('App',()=>{
    it('renders correctly',()=>{
        expect(app).toMatchSnapshot()
    })
    it('ititialises the state with empty list of gifts',()=>{
        expect(app.state().gifts).toEqual([])
    })
    describe("when clicking the add-gift button",()=>{
        beforeEach(()=>{
            app.find('.btn-add').simulate('click')
        })
        afterEach(()=>{
            app.setState({gifts:[]})
        })
        it('adds a new gift to state when clicking',()=>{
            expect(app.state().gifts).toEqual([{id: 1}])
        })
        it('adds new gift to the rendered list when clicked',()=>{
            expect(app.find('.gift-list').children().length).toEqual(1)
        })
    })
})